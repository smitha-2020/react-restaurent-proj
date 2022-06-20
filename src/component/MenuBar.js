import React from 'react'

const MenuBar = ({uniqueCategory,getData,orderedItem,setOrderedItem}) => {
  //const totalOrders = JSON.parse(localStorage.get("totalOrders"));
  //console.log("total Orders" + totalOrders)
  //console.log(orderedItem);
  const removeSel = (item) => {
    const orderedItemFiltered = orderedItem.filter((eleItem)=>{ return eleItem.id!==item });
    
    setOrderedItem(orderedItemFiltered);
  }
  return (
    
    <ul className="menuItems-main">
    { uniqueCategory.map((item)=>{ 
      if(item !== "Ordered Items"){
        return(
          <li key={item}><button onClick={() => {getData(item)}}>{item}</button></li>
        )   
      }
      return (<li id="ordered-items" key={item}><button onClick={() => {}}>Ordered Item</button>
      <ul className="ordered-item">
        {orderedItem.map((orderedEle) => {
          return(<li key={orderedEle.id}>{orderedEle.name}<i className="fa-regular fa-minus" onClick={()=>{removeSel(orderedEle.id)}}></i></li>)
          
        })}
          
        </ul>
        
      </li>
      )
    })}
    </ul>
  )
}

export default MenuBar