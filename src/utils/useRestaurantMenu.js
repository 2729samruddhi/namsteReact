import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (resId) {
      fetchMenu();
    }
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const res = await fetch(`/.netlify/functions/menu?resId=${resId}`);
      const json = await res.json();
      setResInfo(json?.data || null);
    } catch (err) {
      console.error("Error fetching menu:", err);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
