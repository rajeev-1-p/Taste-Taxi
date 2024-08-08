import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurents , setlistOfRestaurents ] = useState (resList)

  // const [listOfRestaurents ,setlistOfRestaurents] = useState([ {
  //       data: {
  //         id: "800166",
  //         name: "India Sweet House",
  //         cloudinaryImageId: "a30547693c82a6fe583c3fedae6f4c6c",
  //         locality: "Shivane",
  //         areaName: "Basavanagudi",
  //         costForTwo: "₹300 for two",
  //         cuisines: ["Indian"],
  //         avgRating: 4.4,
  //       },
  //     },
  //     {
  //         data: {
  //             id: "800167",
  //             name: "KFC",
  //             cloudinaryImageId: "a30547693c82a6fe583c3fedae6f4c6c",
  //             locality: "Shivane",
  //             areaName: "Basavanagudi",
  //             costForTwo: "₹300 for two",
  //             cuisines: ["Indian"],
  //             avgRating: 4.8,
  //           },  
  //     },
  //     {
  //         data: {
  //             id: "800168",
  //             name: "indian Dhaba",
  //             cloudinaryImageId: "a30547693c82a6fe583c3fedae6f4c6c",
  //             locality: "Shivane",
  //             areaName: "Basavanagudi",
  //             costForTwo: "₹300 for two",
  //             cuisines: ["Indian"],
  //             avgRating: 3.8,
  //           }
  //     }]
  //   )
  // let listOfRestaurents = [
  //   {
  //     data: {
  //       id: "800166",
  //       name: "India Sweet House",
  //       cloudinaryImageId: "a30547693c82a6fe583c3fedae6f4c6c",
  //       locality: "Shivane",
  //       areaName: "Basavanagudi",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Indian"],
  //       avgRating: 4.4,
  //     },
  //   },
  //   {
  //       data: {
  //           id: "800167",
  //           name: "KFC",
  //           cloudinaryImageId: "a30547693c82a6fe583c3fedae6f4c6c",
  //           locality: "Shivane",
  //           areaName: "Basavanagudi",
  //           costForTwo: "₹300 for two",
  //           cuisines: ["Indian"],
  //           avgRating: 4.8,
  //         },  
  //   },
  //   {
  //       data: {
  //           id: "800168",
  //           name: "indian Dhaba",
  //           cloudinaryImageId: "a30547693c82a6fe583c3fedae6f4c6c",
  //           locality: "Shivane",
  //           areaName: "Basavanagudi",
  //           costForTwo: "₹300 for two",
  //           cuisines: ["Indian"],
  //           avgRating: 3.8,
  //         },
  //   }
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter((res) => res.data.avgRating > 4.3);
            // console.log(listOfRestaurents);
            setlistOfRestaurents(filteredList)
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
