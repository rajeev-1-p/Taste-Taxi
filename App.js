import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="./images/image1.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Card Item</li>
        </ul>
      </div>
    </div>
  );
};



const RestaurantCard = () => {
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0" }}>
     <img className="res-logo"
     alt="res-logo" src="https://b.zmtcdn.com/data/pictures/5/50715/011d3ade7fbf4a5033ac331087f0f90b_o2_featured_v2.jpg?output-format=webp"/>
      <h3>Meghna Foods</h3>
      <h4>Biryani , North Indian , Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>

    </div> 
  )
}
const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">

       <RestaurantCard /> 
       <RestaurantCard /> 
       <RestaurantCard /> 
       <RestaurantCard /> 
       <RestaurantCard /> 
       <RestaurantCard /> 
       <RestaurantCard /> 
       <RestaurantCard /> 
       <RestaurantCard /> 
       <RestaurantCard /> 
       <RestaurantCard /> 
       <RestaurantCard /> 
       <RestaurantCard /> 
       <RestaurantCard /> 
       <RestaurantCard /> 
      </div>

    </div>
  )
}


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
