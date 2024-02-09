import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/redux/cartSlice";
import ItemList from "./ItemList";
import emptycart from "../../assets/emptycart.jpg";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const calculateCartTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total +
        Math.round(
          item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100
        ),
      0
    );
  };
  // Payment integration
  const makePayment = async()=>{
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

    const body = {
        products:cartItems
    }
    const headers = {
        "Content-Type":"application/json"
    }
    const response = await fetch("http://localhost:3000/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
        sessionId:session.id
    });
    
    if(result.error){
        console.log(result.error);
    }
}

  

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
              <table>
                <tr>
                  <td>Sub-Total</td>
                  <td> ₹{calculateCartTotal()}</td>
                </tr>
                <tr>
                  <td>Delivery Charges </td>
                  <td>₹100</td>
                </tr>
                <tr>
                  <th>Grand-Total </th>
                  <th>₹{calculateCartTotal() + 100}</th>
                </tr>
              </table>
              <button onClick={makePayment} className="cart-checkout">
                Checkout
              </button>
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
