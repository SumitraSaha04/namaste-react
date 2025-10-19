import RestroCard from "./RestroCard";
import restroList from "../utils/mockData";
import {useState} from "react";



const Body = () => {
const [listOfRestros,setListOfRestros]=useState(restroList);


  return (
    <div className="body">
      <div className="search">Search</div>
      
        <button className="filter-btn" onClick={()=>{
          console.log("Before filter",listOfRestros);
          
          const filtered=listOfRestros[0]?.cards?.filter((res)=>res.info.avgRating<4.6);
          const updatedSameStructure=[{
            cards:filtered,
          }]
          setListOfRestros(updatedSameStructure);
          setTimeout(()=>{
             console.log("After filter",updatedSameStructure);
          },100000);
         
        }}
        
    
        
        >Top rated restros</button>
      <div className="res-container">
        {listOfRestros[0]?.cards?.map((restaurant) => (
          <RestroCard key={restaurant?.info?.id} info={restaurant?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;