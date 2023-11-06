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
  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems)
  return (
    <div className="header ">
      <div className="logo-container">
         <Link to="/"><img className="logo" src={logo} /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "😊" : "😢"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
         <Link to="/cart"> <li>Cart- {cartItems.length}</li></Link>
          <li>
            <button className="log-btn" onClick={toggleLog}>
              {log}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
