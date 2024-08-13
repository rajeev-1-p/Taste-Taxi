import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url =
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9075059&lng=77.6085986";
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    setListOfRestaurents(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  if (!listOfRestaurents || listOfRestaurents.length === 0) {
    return <Shimmer />; // Display Shimmer while loading
  }

  // setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  // setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4.3
            );
            // console.log(listOfRestaurents);
            setListOfRestaurents(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents && listOfRestaurents.length > 0 ? (
          listOfRestaurents.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        ) : (
          <p>No restaurants available</p> // Optional: a message for when the list is empty or undefined
        )}
      </div>

      {/* <div className="res-container">
        {listOfRestaurents.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div> */}
    </div>
  );
};

export default Body;
