import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartCounter, cartList, checkoutDummy,showMessage, message } = useContext(ShopContext);
  const total = cartList.reduce((sum, item) => sum + item.price, 0);
  const uniqueCartList = cartList.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  return (
    <>
      <div className="checkout">
        <div>
          <h1 className="checkout-title">Order Summary</h1>
          <div className="checkout-items">
            Items ({cartCounter}):{" "}
            {uniqueCartList.map((item) => (
              <div key={item.id}>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <h3 className="checkout-total">Order Total: {total.toFixed(2)}</h3>
        </div>
        <div className="cart-buttons">
          <Link to="/shop/cart">
            <button type="button" className="checkout-button">
              Back to Cart
            </button>
          </Link>
          <button type="button" className="checkout-button" onClick={() => checkoutDummy()}>
            Confirm Order
          </button>
        </div>
        {showMessage && (
          <div className="checkout-dummy">
            {message}
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
