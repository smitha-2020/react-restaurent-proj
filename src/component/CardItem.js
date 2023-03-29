import React from "react";

const CardItem = ({selmenuList,orderedItem,setOrderedItem}) => {
  const storeData = (itemName) => {
    const dataSel = {
      id:new Date().getTime().toString(),
      name:itemName,
    }
    if(itemName){
      setOrderedItem([...orderedItem,dataSel]);
    }
    console.log("setItem" + orderedItem)
    console.log("dataSel" + dataSel);
    return; 
  }

  return (
    <>
      {
      selmenuList.map((itemCard,idx) => {
        return(
          <div className="main" key={idx}>
          <div className="main-number">
            <span className="span-numb">{itemCard.id}</span>
          </div>
          <span className="food-preference">{itemCard.category}</span>
          <h2>{itemCard.name}</h2>
          <span className="card-description subtle">
          {itemCard.description}
          </span>
          <div className="card">
            <div className="card-line"></div>
            <div className="card-read" onClick={() => {storeData(itemCard.name)}}>ORDER NOW</div>
          </div>
          <img className="card-image" src={itemCard.image} alt={itemCard.name}>
          </img>
        </div>

        )
        
      })}
    </>
  );
};

export default CardItem;
