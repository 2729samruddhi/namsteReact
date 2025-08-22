import { useContext, useState } from "react";
import { logo_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContexts from "../utils/UserContexts";
import { useSelector } from "react-redux";

const Header = () => {
  const[btnNameReact,setBtnNameReact]= useState("LogIn")
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContexts)

  //subscibing to the store using selector
 const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex items-center p-2 shadow-md bg-green-50">
      <div className="w-[130px] items-center shadow-md bg-green-50">
        <img
          className="logo"
          src={logo_URL}
        />
      </div>

      <div className="ml-auto ">
        <ul className="flex gap-5 items-center text-lg cursor-pointer mr-2">
          <li>onlineStatus: {onlineStatus? "✅":"🔴"}</li>
          <li> <Link to={"/"}> Home</Link></li>
          <li><Link to={"/about"}> About Us </Link>  </li>
          <li><Link to={"/contact"}> Contact Us</Link> </li>
          <li><Link to={"/grocery"}> Grocery</Link> </li>

          <li>Cart ({cartItems.length} items)</li>
          <button className="px-5 py-1 mr-3 bg-orange-400 text-white rounded-lg"
          onClick={()=>{
            btnNameReact === "LogIn" ?
            setBtnNameReact("LogOut") :
            setBtnNameReact("LogIn")
          }}>
          {btnNameReact}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;