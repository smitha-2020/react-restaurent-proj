import React, { useState } from "react";
import CardItem from "./CardItem";
import Menu from "../MenuApi";
import MenuBar from "./MenuBar";
//import MenuBar from "./MenuBar";


//console.log(uniqueCategory)
//console.log(Menu)
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
    //console.log("category" + category)
    if(category==="all"){
      setSelmenuList(Menu);
      return;
    }
    const List = menuList.filter((item)=>{
       return item.category === category;
     })
    //alert(List);
    //setMenuList(List);
    setSelmenuList(List)
    //alert(List)
  }
  //setMenuList(Menu);
  console.log(selmenuList);
  return (
    <>
      {/* Menu Items */
       //console.log(uniqueCategory)
      }
      <div className="menu">
        <div className="menu-items">
          {/* <MenuBar uniqueCategory={uniqueCategory}/> */}
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

