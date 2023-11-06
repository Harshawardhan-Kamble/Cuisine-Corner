import { useState } from "react";
import useRestaurantMenu from "../utils/useRestuarantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { id } = useParams();
  // Used useRestaurantMenu custom hook
  const resInfo = useRestaurantMenu(id);
  if (resInfo === null) return <Shimmer />;
  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    feeDetails,
    sla,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;
  // console.log(
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // const { itemCard2 } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     .itemCards;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <>
      <div className=" flex justify-center items-center ">
        <div className="w-full flex justify-between max-w-screen-sm my-8">
          <div>
            <p className="font-bold my-6 text-lg  text-lightBlack">{name}</p>
            <p className=" text-sm text-gray-500">{cuisines.join(",")}</p>
            <p className=" text-sm  text-gray-500">{areaName}</p>
            {/* <img
              className="mt-2"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu"
            /> */}
            <p className="text-sm  text-gray-500 my-3">{feeDetails.message}</p>
            <span className="font-bold  text-md  text-gray-700">
              {sla.deliveryTime}MINS
            </span>
            <span className="font-bold  text-md  text-gray-700 m-5">
              {costForTwoMessage}
            </span>
          </div>
          {/* <h4>{itemCards[0].card.info.category}</h4>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>
            {item?.card?.info?.name} ₹{" "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
          {/* <ul> */}
          <div className="border-2 border-gray-200 h-16 my-6 rounded-lg">
            <p className="font-bold text-center text-lg text-green-500">
              &#9733; {avgRating}
            </p>
            <hr></hr>
            <p className="text-gray-400 font-semibold">{totalRatingsString}</p>
          </div>
        </div>
      </div>
      <div>
        {categories.map((category, index) => (
          // <li key={index}>
          //   <h4>{category?.card?.card?.title}</h4>
          //   {category?.card?.card?.itemCards.map((item,index)=>(<p key={index}>{item?.card?.info?.name}</p>))}
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
            // showItems={index === showIndex ? true : false}
            // show={()=>setShowIndex(index)}
            showItems={showIndex===index}
            show={()=>setShowIndex(index)}
          />
          //   </li>
        ))}
        {/* // </ul> */}
      </div>
    </>
  );
};
export default RestMenu;
