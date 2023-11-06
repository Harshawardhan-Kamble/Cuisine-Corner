import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constant";
const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + id);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
