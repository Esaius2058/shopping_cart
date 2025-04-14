import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import Navbar from "./Navbar";

const HomePage = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="home-page">
      <Navbar />
      <div className="hero">
        <h1>Find What Moves You at DIGERO</h1>
        <p className="hero-tagline">
          Discover a world of variety and charm at DIGERO - your one-stop shop
          for unique and everyday essentials.
        </p>
      </div>
      <div className="body">
        <div className="product-wrappers">
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
              <Link to="/shop" className="link">
                <button className="shop-button">Shop Now</button>
              </Link>
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
              <Link to="/shop" className="link">
                <button className="shop-button">Shop Now</button>
              </Link>
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
              <Link to="/shop" className="link">
                <button className="shop-button">Shop Now</button>
              </Link>
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
              <Link to="/shop" className="link">
                <button className="shop-button">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="benefits">
          <div className="benefits-1">
            <img src={"/curated_essentials.jpg"} alt="essentials" />
            <div>
              <h1>Curated Essentials</h1>
            </div>
          </div>
          <div className="benefits-1">
            <img src={"/fast_delivery2.jpg"} alt={"delivery"} />
            <div>
              <h1>Fast Delivery</h1>
            </div>
          </div>
          <div className="benefits-1">
            <img src={"/quality_guaranteed.jpg"} alt={"quality"} />
            <div>
              <h1>Quality Guaranteed</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="about">
          <Link to="/about"><p>Get To Know Us</p></Link>
          <Link><p>Return Policy</p></Link>
          <Link><p>FAQs</p></Link>
        </div>
        <div className="social-media">
          <Link><img src={"/phone-solid.svg"} alt={"phone"} /></Link>
          <Link><img src={"/envelope-solid.svg"} alt={"email"} /></Link>
          <Link><img src={"/instagram-brands.svg"} alt={"instagram"} /></Link>
          <Link><img src={"/x-twitter-brands.svg"} alt={"x-twitter"} /></Link>
          <Link><img src={"/facebook-f-brands.svg"} alt={"facebook"} /></Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;