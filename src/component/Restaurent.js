import React, { useState } from "react";
import CardItem from "./CardItem";
import Menu from "../MenuApi";
import MenuBar from "./MenuBar";

const Restaurent = () => {
  const [menuList, setMenuList] = useState([]);
  const [stateMenu, setStatemenu] = useState(true);
  const [selmenuList, setSelmenuList] = useState([]);
  const [orderedItem, setOrderedItem] = useState([]);

  if (stateMenu) {
    setMenuList(Menu);
    setStatemenu(false);
  }
  const uniqueCategory =[...new Set(Menu.map((menuItem) => {
    return menuItem.category;
 })),"all","Ordered Items"];

  const getData = (category) => {
    if(category==="all"){
      setSelmenuList(Menu);
      return;
    }
    const List = menuList.filter((item)=>{
       return item.category === category;
     })
    setSelmenuList(List)
  }
  console.log(selmenuList);
  return (
    <>
      <div className="menu">
        <div className="menu-items">
          <MenuBar getData ={getData} uniqueCategory={uniqueCategory} orderedItem={orderedItem} setOrderedItem={setOrderedItem}/>
        </div>
      </div>

      <section className="main-viewport">
        <CardItem className = "main-viewport-style" selmenuList={selmenuList} orderedItem={orderedItem} setOrderedItem={setOrderedItem} />
      </section>
    </>
  );
};

export default Restaurent;

