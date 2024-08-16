import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

 const Header = () => {

  const [btnName , setbtnName ] = useState ("login")
  
  

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart </li>
          <button className="login" onClick={
            ()=>{
              btnName === "login" ? 
              setbtnName("logout") 
              : setbtnName("login")
              
              
              
            }
          }>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  

  export default Header;