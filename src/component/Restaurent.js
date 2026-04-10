import React, { useState, useMemo } from "react";
import CardItem from "./CardItem";
import Menu from "../MenuApi";
import MenuBar from "./MenuBar";

const Restaurent = () => {
  const [selmenuList, setSelmenuList] = useState(Menu);
  const [orderedItem, setOrderedItem] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const uniqueCategory = useMemo(() => {
    const categories = [...new Set(Menu.map((item) => item.category))];
    return ["all", ...categories.sort(), "Ordered Items"];
  }, []);

  const getData = (category) => {
    setActiveCategory(category);
    if (!category || category === "all") {
      setSelmenuList(Menu);
      return;
    }
    setSelmenuList(Menu.filter((item) => item.category === category));
  };

  return (
    <div className="restaurant-page">
      <header className="site-header">
        <div className="site-header__inner">
          <div className="brand">
            <span className="brand__name">House Menu</span>
            <span className="brand__tagline">Seasonal · Fresh · Daily</span>
          </div>
          <MenuBar
            getData={getData}
            uniqueCategory={uniqueCategory}
            orderedItem={orderedItem}
            setOrderedItem={setOrderedItem}
            activeCategory={activeCategory}
          />
        </div>
      </header>

      <section className="menu-hero" aria-labelledby="menu-heading">
        <h1 id="menu-heading" className="menu-hero__title">
          Today&apos;s selection
        </h1>
        <p className="menu-hero__subtitle">
          Browse by course, add dishes to your list, and refine your order
          before you speak with the kitchen.
        </p>
      </section>

      <section className="main-viewport" aria-label="Menu items">
        <CardItem
          selmenuList={selmenuList}
          orderedItem={orderedItem}
          setOrderedItem={setOrderedItem}
        />
      </section>
    </div>
  );
};

export default Restaurent;
