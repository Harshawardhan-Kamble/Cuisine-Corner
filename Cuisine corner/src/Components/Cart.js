import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/redux/cartSlice";
import ItemList from "./ItemList";
import emptycart from "../../assets/emptycart.jpg";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const calculateCartTotal = () => {
    return cartItems.reduce((total, item) =>  total + Math.round(item.card.info.price/100), 0);
  };
  return (
    <div className="cart-container">

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h1>
            Your cart is lonely. Fill it up with some of our delicious dishes <span><Link to="/">&#8594;</Link></span></h1>
          <img className="empty-cart-img" src={emptycart}></img>
        </div>
      ) : (
        <>
      <div className="container-1">  
      <div className="text-center font-bold mt-10 ">
        <p className="font-bold">Cart Page</p>
      </div>
          <div className="text-center my-4">
            <button
              onClick={handleClearCart}
              className="clear-cart-btn" 
            >
              Clear Cart
            </button>
          </div>
          <div className="w-6/12 m-auto">
            <ItemList items={cartItems} />
          </div>
          </div>
          <div className="total-cart-price">
            <p>Total Cart Price: ₹{calculateCartTotal()}</p>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
