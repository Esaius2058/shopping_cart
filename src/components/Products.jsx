import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/home_icon";
import ShoppingCartIcon from "../assets/shoppingcart_icon";

const ProductList = () => {
  const { products, cartCounter, message, addToCart, showMessage } = useContext(ShopContext);

  if (!products || products.length === 0) {
    return <div>Loading products...</div>;
  }

  return (
    <>
      <div className="products-header">
        <div className="home-icon">
          <Link to="/">
            <HomeIcon />
          </Link>
        </div>
        <div>
          <Link to="cart" className="cart-icon">
            <ShoppingCartIcon />
            <p>{cartCounter}</p>
          </Link>
        </div>
      </div>
      {showMessage && (
        <div className="cart-info">
        {message}
      </div>
      )}    
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <button className="grid-item-shop">
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
