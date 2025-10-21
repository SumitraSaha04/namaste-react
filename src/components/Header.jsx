import { Logo_Url } from "../utils/constanst";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header Rendered");
  return (
    <div className="header-container">
      <div className="logo-container">
        <img alt="Restro Food Logo" className="logo" src={Logo_Url} />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>Famous Restro Food</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart 🛒</li>
          <button
            onClick={() => {
              btnName==="Login"?
              setBtnName("Logout"):
              setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
