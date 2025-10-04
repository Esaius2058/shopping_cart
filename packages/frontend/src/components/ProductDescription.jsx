import { ShopContext } from "./ShopContext";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import HomeIcon from "../../public/home_icon";;
import ShoppingCartIcon from "../../public/shoppingcart_icon";
import Navbar from "./Navbar";
import starIcon from "/star-solid.svg";

const Description = () => {
  const { productId } = useParams();
  const { products, addToCart, cartCounter, message, showMessage } = useContext(ShopContext);

  const product = products.find((item) => item.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-description">
      <Navbar />
      <div className="product-description-container">
        <h3 className="product-description-title">{product.title}</h3>
        <div className="product-description-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="product-description-about">
          <h3>About this item</h3>
          <p>{product.description}</p>
        </div>
        <div className="product-description-rating">
          <p>
            Rating: {product.rating}
            <span>
              <img src={starIcon} alt="star" className="rating-star" />
            </span>
          </p>
          <p>{product.shippingInformation}</p>
          <p>{product.stock} left in stock</p>
          <p>{product.returnPolicy || "No returns available"}</p>
          <p>Warranty: {product.warranty || "No warranty provided"}</p>
        </div>
        <div className="product-description-buttons">
          <button className="grid-item-button" onClick={() => addToCart(product)}>
            Add To Cart
          </button>
          <Link to="/shop">
            <button className="grid-item-button">Back to Shop</button>
          </Link>
        </div>
        {showMessage && <div className="cart-info">{message}</div>}
      </div>
    </div>
  );
};

export default Description;
