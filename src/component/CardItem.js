import React from "react";
import { resolvePublicImage } from "../utils/resolvePublicImage";

const CardItem = ({ selmenuList, orderedItem, setOrderedItem }) => {
  const storeData = (itemCard) => {
    if (!itemCard?.name) return;
    const dataSel = {
      id: new Date().getTime().toString(),
      name: itemCard.name,
      image: itemCard.image,
    };
    setOrderedItem([...orderedItem, dataSel]);
  };

  if (selmenuList.length === 0) {
    return (
      <p
        style={{
          gridColumn: "1 / -1",
          textAlign: "center",
          padding: "3rem 1rem",
          color: "var(--color-ink-muted)",
          fontSize: "1rem",
        }}
      >
        No dishes in this category.
      </p>
    );
  }

  return (
    <>
      {selmenuList.map((itemCard) => (
        <article className="menu-card" key={itemCard.id}>
          <div className="menu-card__media">
            <span className="menu-card__badge" aria-hidden="true">
              {itemCard.id}
            </span>
            <img
              className="menu-card__image"
              src={resolvePublicImage(itemCard.image)}
              alt={itemCard.name}
            />
          </div>
          <div className="menu-card__body">
            <div className="menu-card__meta">
              <span className="menu-card__category">{itemCard.category}</span>
              {itemCard.price && (
                <span className="menu-card__price">{itemCard.price}</span>
              )}
            </div>
            <h2 className="menu-card__title">{itemCard.name}</h2>
            <p className="menu-card__description">{itemCard.description}</p>
            <div className="menu-card__footer">
              <button
                type="button"
                className="menu-card__order"
                onClick={() => storeData(itemCard)}
              >
                Add to order
              </button>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default CardItem;
