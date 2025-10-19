import  styleCard from "../utils/constanst";


const RestroCard = ( {info }) => {
  const { cuisines, name, costForTwo, cloudinaryImageId, avgRating, sla } = info;

  return (
    <div className="restro-card" style={styleCard}>
      <img className="food-img" alt="food-img" src={cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4> {avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};
export default RestroCard;