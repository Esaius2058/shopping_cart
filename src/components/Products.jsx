import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "../assets/shoppingcart_icon";
import Logo from "./Logo";

const ProductList = () => {
  const {
    products,
    cartCounter,
    message,
    addToCart,
    showMessage,
    filterProductList,
  } = useContext(ShopContext);

  if (!products || products.length === 0) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="shop">
      <div className="shop-navigation">
        <Logo />
        <div className="shop-navigation-links">
          <div className="product-categories">
            <select
              name="categories"
              id="categories"
              onChange={(e) => filterProductList(e.target.value)}
            >
              <option value="all">All Products</option>
              <option value="beauty">Beauty Products</option>
              <option value="fragrances">Fragrances</option>
              <option value="furniture">Furniture</option>
              <option value="groceries">Groceries</option>
            </select>
          </div>
          <div>
            <Link to="cart" className="cart-icon">
              <ShoppingCartIcon />
              <p>{cartCounter}</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="products-container" id="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/shop/${product.id}`}>
              <button className="grid-item-shop">
                <img src={product.thumbnail} alt={product} />
                <div className="price-title">
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                </div>
              </button>
            </Link>
            <button
              className="grid-item-button"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
        {showMessage && <div className="cart-info">{message}</div>}
      </div>
    </div>
  );
};
export default ProductList;