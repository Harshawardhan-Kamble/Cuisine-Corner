import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [log, setLog] = useState("Login");
  const toggleLog = () => {
    setLog(log === "Login" ? "Logout" : "Login");
  };
  const onlineStatus = useOnlineStatus();
  // Subscribing to store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header ">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
        
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
          <li>
          <Link to="/cart">
            Cart- {cartItems.length}
          </Link></li>
          <li>
            <button className="log-btn" onClick={toggleLog}>
              {log}
              <span>{onlineStatus ? "🟢" : "🔴"}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
