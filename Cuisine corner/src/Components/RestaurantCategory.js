import ItemList from "./ItemList";
const RestaurantCategory = ({ data ,showItems,show}) => {
  return (
    <div>
      <div onClick={show} className="menu-category" >
        <div className="menu-category-title">
          <span >
            {data.title} ({data.itemCards.length})
          </span>
          <span>&darr;</span>
        </div>{
        showItems&&<ItemList items={data.itemCards}/>}
      </div>
    </div>
  );
};
export default RestaurantCategory;
