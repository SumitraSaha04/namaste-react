import  styleCard from "../utils/constanst";
// <img class="sc-eeDRCY nODVy" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/c5ec8a07-043b-4ece-bfb1-d9063ff46534_29706.jpg" alt="Chowman">
// <img class="sc-eeDRCY nODVy" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/5/21/9462deb7-8d74-4af1-9e2d-71b54e4e6234_aa376013-7bf1-4989-bb9e-abd0ffe1aefd.png_compressed" alt="Wow! Momo">
const RestroCard = ( {info }) => {
  const { cuisines, name, costForTwo, cloudinaryImageId, avgRating, sla } = info;

  return (
    <div className="restro-card" style={styleCard}>
      <img className="food-img" alt="food-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
+cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4> {avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};
export default RestroCard;