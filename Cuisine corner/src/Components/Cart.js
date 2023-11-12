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
    return cartItems.reduce(
      (total, item) => total + Math.round(item.card.info.price / 100 || item.card.info.defaultPrice/100 ),
      0
    );
  };
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h1>
            Your cart is lonely. Fill it up with some of our delicious dishes{" "}
            <span>
              <Link to="/">&#8594;</Link>
            </span>
          </h1>
          <img className="empty-cart-img" src={emptycart}></img>
        </div>
      ) : (
        <>
          
          <div className="cart-container">
            <div className="cart-items">
            <p>Order Basket</p>
              <ItemList items={cartItems} />
            </div>
            <div className="total-cart-price">
              <h2>Basket Summary</h2>
              <p>Sub-Total: ₹{calculateCartTotal()}</p>
              <p>Delivery Charges: ₹100</p>
              <p>Grand-Total: ₹{calculateCartTotal() +100}</p>
              <button className="cart-checkout">Checkout</button>
            </div>
          </div>
          <div className="text-center my-4">
            <button onClick={handleClearCart} className="clear-cart-btn">
              Clear Cart
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default Cart;
