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
          <li>Cart🛒</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = {
  backgroundColor: "white",
};

const RestroCard = () => {
  return (
    <div className="restro-card" style={styleCard}>
      <img
        className="food-img"
        alt="food-img"
        src="https://i.pinimg.com/736x/ce/ca/44/ceca445df991a3eeaa49861b7cd2db7c.jpg"
      />
      <h3>Meghna Foods</h3>
      <h4>Italian Cuisine</h4>
      <h4>
        4.4 stars 
      </h4>
      <h4>30 mins</h4>

      <div className="rating"></div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestroCard />
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
