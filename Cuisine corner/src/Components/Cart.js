import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/redux/cartSlice";
import ItemList from "./ItemList";
import emptycart from "../../assets/emptycart.jpg";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="text-center font-bold mt-10 ">
        {/* <p className="font-bold">Cart</p> */}
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h1>
            Your cart is lonely. Fill it up with some of our delicious dishes
          </h1>
          <img className="empty-cart-img" src={emptycart}></img>
        </div>
      ) : (
        <>
          <div className="text-center my-4">
            <button
              onClick={handleClearCart}
              className="p-2 font-bold m-auto bg-gray-400 rounded-md "
            >
              Clear Cart
            </button>
          </div>
          <div className="w-6/12 m-auto">
            <ItemList items={cartItems} />
          </div>
        </>
      )}
    </>
  );
};
export default Cart;
