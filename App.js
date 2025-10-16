import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          alt="Restro Food Logo"
          className="logo"
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png"
        />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>Famous Restro Food</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart 🛒</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "white",
};

// ✅ simplified restroList (your same JSON)
const restroList = [
  {
    cards: [
      {
        info: {
          id: "1010897",
          name: "Arsalan",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/4/5/e1c285ed-2d27-4a10-928f-4459073e9b8a_fde8c012-dd8e-4c71-8a32-1ffe3f8fd639.jpg",
          costForTwo: "₹800 for two",
          cuisines: [
            "Biryani",
            "Mughlai",
            "Indian",
            "Awadhi",
            "Tandoor",
            "Kebabs",
          ],
          avgRating: 4.5,
          sla: { deliveryTime: 53 },
        },
      },
      {
        info: {
          id: "25140",
          name: "Zam Zam Restaurant",
          cloudinaryImageId: "e85899aceae5ebe729d0440e4b1239df",
          costForTwo: "₹200 for two",
          cuisines: ["Mughlai", "Biryani"],
          avgRating: 4.6,
          sla: { deliveryTime: 42 },
        },
      },
      {
        info: {
          id: "893947",
          name: "Oudh 1590",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/fb76d27d-cdd7-4c27-b3e0-7298e9095e4a_893947.jpg",
          costForTwo: "₹800 for two",
          cuisines: ["Biryani"],
          avgRating: 4.5,
          sla: { deliveryTime: 42 },
        },
      },
    ],
  },
];


const RestroCard = ({ info }) => {
  const { cuisines, name, costForTwo, cloudinaryImageId, avgRating, sla } = info;

  return (
    <div className="restro-card" style={styleCard}>
      <img className="food-img" alt="food-img" src={"https://res.cloudinary.com/swiggy/image/upload/"+cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restroList[0].cards.map((restaurant) => (
          <RestroCard key={restaurant.info.id} info={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

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
