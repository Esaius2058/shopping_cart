import { useContext } from "react";
import { ShopContext } from "./ShopContext";

const Checkout = () => {
  const { cartCounter, cartList, error } = useContext(ShopContext);
  const total = cartList.reduce((sum, item) => sum + item.price, 0);
  const uniqueCartList = cartList.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  if (error) return <div>{error}</div>
  return (
    <>
      <div className="checkout">
        <div>
          <h2 className="checkout-title">Order Summary</h2>
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
        <div className="cart-button">
          <button type="button">Back to Cart</button>
          <button type="button">Confirm Order</button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
