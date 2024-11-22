import Cart from "./ShoppingCart";

const ProductList = ({products, cartList, cartCounter, message, addToCart, cartTracker, handleChange}) => {

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
