import { useState, useEffect } from "react";
import "./App.css";
import { ShopContext } from "./components/ShopContext";
import { Outlet } from "react-router-dom";

function App() {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cartList, setCartList] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

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
        setOriginalProducts(data.products);
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
      showScreenMessage(`Added ${item.title} to cart`);
    } else {
      setCartList((prev) => [...prev, item]);
      setCartCounter((cartCounter) => cartCounter + 1);
      showScreenMessage(`Added ${item.title} to cart`);
    }
  };

  const clearCart = () => {
    if (cartList.length > 0 && confirm("Clear all items in cart?")) {
      setCartList([]);
      setCartCounter(0);
    } else if (cartList.length == 0) {
      showScreenMessage("No items in cart");
    }
  };

  const showScreenMessage = (msg) => {
    setMessage(msg);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
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
      if (e.target.value > 0) {
        showScreenMessage(`Updated cart to ${newQuantity} ${product.title}`);
      } else {
        showScreenMessage(`Removed ${product.title}`);
      }
    }
  };

  const checkoutDummy = () => {
    showScreenMessage("Not enough coins in your e-wallet");
  };

  const filterProductList = (category) => {
    if (category === "all") {
      setProducts(originalProducts);
    }else{
      const filteredItems = originalProducts.filter(
        (item) => item.category === category
      );
      setProducts(filteredItems);
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
        clearCart,
        handleChange,
        checkoutDummy,
        filterProductList,
        error,
        showMessage,
        showScreenMessage,
      }}
    >
      <div className="app-container">
        <Outlet />
      </div>
    </ShopContext.Provider>
  );
}

export default App;
