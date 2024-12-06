import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import ShoppingCartIcon from "../assets/shoppingcart_icon";

const HomePage = () => {
  const { products, cartCounter } = useContext(ShopContext);

  return (
    <div className="home-page">
      <div className="header">
        <div className="title-container">
          <h1 className="home-title">DIGERO</h1>
        </div>
        <div className="nav-container">
          <nav className="nav-bar">
            <Link to="/shop">SHOP</Link>
            <Link to="/shop/cart" className="cart-icon">
              <ShoppingCartIcon />
              <p>{cartCounter}</p>
            </Link>
          </nav>
        </div>
      </div>
      <div className="intro">
        <p>
          Discover a world of variety and charm at DIGERO, your one-stop shop
          for unique and everyday essentials.
        </p>
      </div>
      <div className="body">
        <div className="product-wrapper">
          <h2>Beauty Products</h2>
          <div className="display-products">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="products-container-beauty">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="grid-item"
                />
              </div>
            ))}
            <Link to="/shop">Shop Now</Link>
          </div>
        </div>
        <div className="product-wrapper">
          <h2>Fragrances</h2>
          <div className="display-products">
            {products.slice(6, 10).map((product) => (
              <div key={product.id} className="products-container-beauty">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="grid-item"
                />
              </div>
            ))}
            <Link to="/shop">Shop Now</Link>
          </div>
        </div>
        <div className="product-wrapper">
          <h2>Furniture</h2>
          <div className="display-products">
            {products.slice(11, 15).map((product) => (
              <div key={product.id} className="products-container-beauty">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="grid-item"
                />
              </div>
            ))}
            <Link to="/shop">Shop Now</Link>
          </div>
        </div>
        <div className="product-wrapper">
          <h2>Groceries</h2>
          <div className="display-products">
            {products.slice(20, 24).map((product) => (
              <div key={product.id} className="products-container-beauty">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="grid-item"
                />
              </div>
            ))}
            <Link to="/shop">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
