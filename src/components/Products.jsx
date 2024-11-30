import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/home_icon";
import ShoppingCartIcon from "../assets/shoppingcart_icon";

const ProductList = () => {
  const {products,cartCounter, message, addToCart} = useContext(ShopContext);

  if (!products || products.length === 0){
    return <div>Products are currently being restocked.</div>
  }

  return (
    <>
      <div className="products-header">
        <Link to="/">
          <HomeIcon />
        </Link>
        <Link to="cart">
          <ShoppingCartIcon />
        </Link>
      </div>
      <div className="cart-info">
        <p>Cart Items: {cartCounter}</p>
        <p>{message}</p>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="grid-item-shop">
            <button>
              <img src={product.thumbnail} alt={product} />
              <div className="price-title">
                <p>{product.title}</p>
                <p>${product.price}</p>
              </div>
            </button>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductList;
