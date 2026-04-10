import React, { useState, useRef, useEffect } from "react";
import { resolvePublicImage } from "../utils/resolvePublicImage";

const MenuBar = ({
  uniqueCategory,
  getData,
  orderedItem,
  setOrderedItem,
  activeCategory,
}) => {
  const [orderOpen, setOrderOpen] = useState(false);
  const panelRef = useRef(null);

  const removeSel = (id) => {
    setOrderedItem(orderedItem.filter((ele) => ele.id !== id));
  };

  useEffect(() => {
    const onPointerDown = (e) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target)) {
        setOrderOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <nav className="category-nav" aria-label="Menu categories and order">
      {uniqueCategory.map((item) => {
        if (item === "Ordered Items") {
          return (
            <div
              className="order-dropdown"
              key={item}
              ref={panelRef}
            >
              <button
                type="button"
                className="order-dropdown__toggle"
                aria-expanded={orderOpen}
                aria-haspopup="true"
                onClick={() => setOrderOpen((o) => !o)}
              >
                Your order
                {orderedItem.length > 0 && (
                  <span className="order-dropdown__badge">
                    {orderedItem.length}
                  </span>
                )}
              </button>
              {orderOpen && (
                <ul className="order-dropdown__panel">
                  {orderedItem.length === 0 ? (
                    <li className="order-dropdown__empty">
                      No items yet. Add dishes from the menu.
                    </li>
                  ) : (
                    orderedItem.map((orderedEle) => {
                      const thumbSrc = resolvePublicImage(orderedEle.image);
                      return (
                        <li
                          className="order-dropdown__item"
                          key={orderedEle.id}
                        >
                          <div className="order-dropdown__row">
                            {thumbSrc ? (
                              <img
                                className="order-dropdown__thumb"
                                src={thumbSrc}
                                alt=""
                              />
                            ) : (
                              <span
                                className="order-dropdown__thumb order-dropdown__thumb--placeholder"
                                aria-hidden="true"
                              />
                            )}
                            <span className="order-dropdown__name">
                              {orderedEle.name}
                            </span>
                          </div>
                          <button
                            type="button"
                            className="order-dropdown__remove"
                            aria-label={`Remove ${orderedEle.name}`}
                            onClick={() => removeSel(orderedEle.id)}
                          >
                            <i className="fas fa-times" aria-hidden="true" />
                          </button>
                        </li>
                      );
                    })
                  )}
                </ul>
              )}
            </div>
          );
        }

        const isActive =
          item === "all"
            ? activeCategory === "all"
            : activeCategory === item;

        return (
          <button
            type="button"
            key={item}
            className={
              isActive
                ? "category-nav__btn category-nav__btn--active"
                : "category-nav__btn"
            }
            onClick={() => getData(item)}
          >
            {item}
          </button>
        );
      })}
    </nav>
  );
};

export default MenuBar;
