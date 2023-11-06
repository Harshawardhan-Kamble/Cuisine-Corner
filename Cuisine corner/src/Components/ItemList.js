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
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <p>{item?.card?.info?.name}</p>
            <p>
              ₹
              {Math.round(item.card.info.price / 100) ||
                item.card.info.defaultPrice / 100}
            </p>
            <p className=" text-gray-400 text-sm mt-2 mb-2">
              {item?.card?.info?.description}
            </p>
          </div>
              <div className="relative">
                <button onClick={()=>handleAddItem(item)} className="absolute left-10 top-5 right-50 pl-4 pr-4 my-14 rounded-sm bg-white  shadow-lg  text-green-500 font-semibold w-16">
                  Add
                </button>
              </div>
          {item?.card?.info?.imageId ? (
            <div className="w-3/12 p-4">
              <img
                src={CDN_IMAGE + item?.card?.info?.imageId}
                className="w-full"
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
