import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/home_icon";

const Cart = () => {
  const {
    cartList,
    cartCounter,
    cartTracker,
    clearCart,
    handleChange,
    message,
    showMessage,
  } = useContext(ShopContext);
  const total = cartList.reduce((sum, item) => sum + item.price, 0);

  const uniqueCartList = cartList.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  return (
    <div className="cart-body">
      <div className="cart-header">
        <div className="products-header">
          <div className="home-icon">
            <Link to="/">
              <HomeIcon />
            </Link>
          </div>
          <div>
            <h2>Shopping Cart</h2>
          </div>
          <div>
            <Link to="/shop" className="cart-icon">
              SHOP
            </Link>
          </div>
        </div>
      </div>
      <div className="cart-container">
        <div className="cart-items">
          {uniqueCartList.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className="item-details">
                <p>{item.title}</p>
                <p>{item.stock} in stock</p>
                <p>${item.price}</p>
                <input
                  name="quantity-input"
                  type="number"
                  min="0"
                  max={item.stock}
                  value={cartTracker(item, cartList)}
                  onChange={(e) => handleChange(e, item)}
                />
              </div>
            </div>
          ))}
        </div>
        {showMessage && <div className="cart-info">{message}</div>}
        <div className="cart-details">
          <p>
            Subtotal ({cartCounter} items): {total.toFixed(2)}
          </p>
          <div className="cart-buttons">
            <button type="button" className="clear-cart" onClick={() => clearCart()}>
              Clear Cart
            </button>
            <Link to="/shop/checkout">
              <button className="checkout-button" type="button">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
