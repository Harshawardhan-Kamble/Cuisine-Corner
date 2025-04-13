import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  // const [log, setLog] = useState("Login");
  // const toggleLog = () => {
  //   setLog(log === "Login" ? "Logout" : "Login");
  // };
  const onlineStatus = useOnlineStatus();
  // Subscribing to store
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="header ">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
      </div>
      <div className={
            showMediaIcons ? "nav-items mobile-nav-link" : "nav-items"
          }>
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
             {/* <button className="log-btn" > */}
              {/* {log}  */}
              {/* <span>{onlineStatus ? "🟢" : "🔴"}</span> */}
            {/* </button> */}
          </li>
        </ul>
      </div>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
    </div>
  );
};
export default Header;
