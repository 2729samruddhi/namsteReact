import { useState } from "react";
import { logo_URL } from "../utils/constants";

const Header = () => {
  const[btnNameReact,setBtnNameReact]= useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={logo_URL}
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button 
          onClick={()=>{

          }}>
          {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;