import React, { useEffect,useState} from "react";
import { MENU_API } from "../utils/constants";


const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data?.json();
   // console.log(json);
    const dataObj = json?.data;
    setResInfo(dataObj);
  };

  return resInfo;
};

export default useRestaurantMenu;
