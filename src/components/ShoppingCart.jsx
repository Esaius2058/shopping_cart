import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartList, cartCounter, cartTracker, handleChange} = useContext(ShopContext);
  const total = cartList.reduce((sum, item) => sum + item.price, 0);

  const uniqueCartList = cartList.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <Link to="/shop">Shop</Link>
      {uniqueCartList.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.title} />
          <div>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.stock} in stock</p>
            <input
              name="quantity-input"
              type="number"
              min="0"
              max={item.stock}
              value={cartTracker(item, cartList)}
              onChange={(e) => handleChange(e, item)}
            />
          </div>
          <p>${item.price}</p>
        </div>
      ))}
      <p>
        Subtotal ({cartCounter} items): {total.toFixed(2)}
      </p>
    </div>
  );
};

export default Cart;
