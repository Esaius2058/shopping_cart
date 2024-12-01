import { useState, useEffect } from "react";
import "./App.css";
import { ShopContext } from "./components/ShopContext";
import { Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cartList, setCartList] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      const url = "https://dummyjson.com/products";

      try {
        const response = await fetch(url, {
          method: "GET",
          mode: "cors",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchProductData();
  }, []);

  const addToCart = (item) => {
    if (!cartList.includes(item)) {
      setCartList((prev) => [...prev, item]);
      setCartCounter((prevCounter) => prevCounter + 1);
      setMessage("Added to cart");
    } else {
      setCartList((prev) => [...prev, item]);
      setCartCounter((cartCounter) => cartCounter + 1);
      setMessage("Added to cart");
    }
  };

  const cartTracker = (item, cartList) => {
    var itemCounter = 0;
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i] === item) {
        itemCounter++;
      }
    }
    return itemCounter;
  };

  const handleChange = (e, product) => {
    const newQuantity = parseInt(e.target.value) || 0;

    if (newQuantity >= 0) {
      // Remove all instances of this product from cart
      const filteredCart = cartList.filter((item) => item.id !== product.id);

      const updatedCart = [
        ...filteredCart,
        ...Array(newQuantity).fill(product),
      ];

      setCartList(updatedCart);
      setCartCounter(updatedCart.length);
      setMessage(`Added ${newQuantity} of ${product.title}`);
    }
  };

  if (error) return <div>{error}</div>;

  return (
    <ShopContext.Provider
      value={{
        products,
        cartList,
        cartCounter,
        message,
        addToCart,
        cartTracker,
        handleChange,
        error,
      }}
    >
      <div className="app-container">
        <Outlet />
      </div>
    </ShopContext.Provider>
  );
}

export default App;
