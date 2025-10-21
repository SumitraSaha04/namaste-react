import Shimmer from "../Shimmer";
import RestroCard from "./RestroCard";

import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestros, setListOfRestros] = useState([]);
  const [filteredRestros, setFilteredRestros] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5643&lng=88.3693&collection=80461&tags=layout_CCS_Momos&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const res = await response.json();
      const data = res?.data?.cards?.filter((item) => {
        return (
          item?.card.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        );
      });
      console.log("data--", data);
      setListOfRestros(data);
      setFilteredRestros(data);
    } catch (error) {
      console.log("Error from body--", error);
    }
  };

  return listOfRestros.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          className="input-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const filtered = listOfRestros.filter((res) =>
              res?.card?.card?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );

            setFilteredRestros(filtered);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Before filter--", listOfRestros);

            const filtered = listOfRestros.filter(
              (res) => res?.card?.card?.info?.avgRating > 4.5
            );

            setListOfRestros(filtered);
            console.log("Filtered---", filtered);
          }}
        >
          Top rated restros
        </button>
      </div>

      <div className="res-container">
        {searchText === ""
          ? listOfRestros.map((item) => (
              <RestroCard
                key={item?.card?.card?.info?.id}
                info={item?.card?.card?.info}
              />
            ))
          : filteredRestros.map((item) => (
              <RestroCard
                key={item?.card?.card?.info?.id}
                info={item?.card?.card?.info}
              />
            ))}
      </div>
    </div>
  );
};

export default Body;
