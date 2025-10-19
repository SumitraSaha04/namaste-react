import { Logo_Url } from "../utils/constanst";
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          alt="Restro Food Logo"
          className="logo"
          src={Logo_Url}
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

export default Header;