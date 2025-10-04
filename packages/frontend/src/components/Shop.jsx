import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import ProductList from "./Products";
import Cart from "./ShoppingCart";
import Checkout from "./Checkout";

const Shop = () => {
	const {
		products,
    cartList,
    cartCounter,
    message,
    addToCart,
    cartTracker,
    handleChange,
	} = useContext(ShopContext);

  const { name } = useParams();

  return (
    <div>
      {name === "cart" ? (
        <Cart
          cartList={cartList}
          cartCounter={cartCounter}
          cartTracker={cartTracker}
          handleChange={handleChange}
        />
      ) : name === "checkout" ? (
        <Checkout cartCounter={cartCounter} cartList={cartList} />
      ) : (
        <ProductList
          products={products}
          cartList={cartList}
          cartCounter={cartCounter}
          message={message}
          addToCart={addToCart}
          cartTracker={cartTracker}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default Shop;
