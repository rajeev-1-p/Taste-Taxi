import { useState  ,useEffect} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


 const Header = () => {

  const [btnName , setbtnName ] = useState ("login")

  
  
  
  useEffect(() => {
    
    
  } ,[btnName])

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
            <li>
               <Link to="/" >Home</Link>
            </li>
            <li>
            <Link to="/About" >About Us</Link>
            </li>
            <li>
            <Link to="/Contact" >Contact Us</Link>
              </li>
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