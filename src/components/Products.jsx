import Cart from "./ShoppingCart";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";

const ProductList = () => {
  const {products, cartList, cartCounter, message, addToCart, cartTracker, handleChange, error} = useContext(ShopContext);

  if (!products || products.length === 0){
    return <div>Products are currently being restocked.</div>
  }

  if (error) return <div>{error}</div>

  return (
    <>
      <div className="cart-info">
        <p>Cart Items: {cartCounter}</p>
        <p>{message}</p>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id}>
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
      <Cart cartList={cartList} cartCounter={cartCounter} cartTracker={cartTracker} handleChange={handleChange}/>
    </>
  );
};
export default ProductList;
