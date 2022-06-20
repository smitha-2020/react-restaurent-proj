import React from "react";

const CardItem = ({selmenuList,orderedItem,setOrderedItem}) => {
  //console.log(selmenuList);

  
  //const [orderedItem, setOrderedItem] = useState([]);
  //const [item, setItem] = useState([]);
  //const [itemset, setItemSet] = useState(true);
  //const items = props.menuList;
  //console.log(items);
 

  
  const storeData = (itemName) => {
    alert("i am here"+itemName);
    const dataSel = {
      id:new Date().getTime().toString(),
      name:itemName,
    }
    //setItem(dataSel);
  //   alert(dataSel.name);
    //localStorage.setItem("itemOrdered",JSON.stringify(dataSel));
    if(itemName){
      setOrderedItem([...orderedItem,dataSel]);
    }
    
    
    console.log("setItem" + orderedItem)
    console.log("dataSel" + dataSel);
    return;

   
    //localStorage.setItem("totalOrders",JSON.stringify(dataSel));
    
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
            {/* <img src="images/allupakoida.jpg"></img> */}
          </img>
        </div>

        )
        
      })}
    </>
  );
};

export default CardItem;
