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

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResList(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterList(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
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
