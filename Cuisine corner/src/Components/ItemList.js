import { useDispatch } from "react-redux";
import { CDN_IMAGE } from "../utils/constant";
import { addItem } from "../utils/redux/cartSlice";
const ItemList = ({ items}) => {
  // console.log(items);
  const dispatch=useDispatch()
  const handleAddItem=(item)=>{
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div
          className="menu-item-container"
          key={item?.card?.info?.id}
        >
          <div className="menu-item-card">
            <p>{item?.card?.info?.name}</p>
            <p>
              ₹
              {Math.round(item.card.info.price / 100) ||
                item.card.info.defaultPrice / 100}
            </p>
            <p>
              {item?.card?.info?.description}
            </p>
          </div>
              <div className="item-add">
                <button onClick={()=>handleAddItem(item)} className="item-add-btn">
                  Add
                </button>
              </div>
          {item?.card?.info?.imageId ? (
            <div className="item-img">
              <img
                src={CDN_IMAGE + item?.card?.info?.imageId}
              />
            </div>
          ) : null}

          {/* <div className="w-3/12 p-4"><img src={CDN_IMAGE+item?.card?.info?.imageId} className="w-full"/></div> */}
        </div>
      ))}
    </div>
  );
};
export default ItemList;
