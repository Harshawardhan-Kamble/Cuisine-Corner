import RestuarantCard from "./RestaurantCard";
import { CDN_IMAGE } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const RestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showTopRated, setShowTopRated] = useState(false);
  const topRated = () => {
    setShowTopRated(true);
  };
  const handlerOnClick = () => {
    const filteredText = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterList(filteredText);
  };
  console.log(resList)
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D18.5204303%26lng%3D73.8567437%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const json = await data.json();
  
    let list =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    if (list === undefined) {
      list=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    }
    setResList(list)
    setFilterList(list);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const filteredRating = showTopRated
      ? resList.filter((data) => data.info.avgRating >= 4.5)
      : resList;
    setFilterList(filteredRating);
  }, [showTopRated, resList]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Internet Disconnected</h1>;
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Filter
        searchText={searchText}
        setSearchText={setSearchText}
        handlerOnClick={handlerOnClick}
        topRated={topRated}
      />
      <div className="res-container">
        {filterList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant.info.id}
          >
            <RestuarantCard
              name={restaurant.info.name}
              cuisine={restaurant.info.cuisines}
              rating={restaurant.info.avgRating}
              img={CDN_IMAGE + restaurant.info.cloudinaryImageId}
              price={restaurant.info.costForTwo}
              delivery={restaurant.info.sla.deliveryTime + " min"}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
export default RestaurantList;
