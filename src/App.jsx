import { useState, useEffect } from "react";
import "./App.css";
import { ShopContext } from "./components/ShopContext";
import { Outlet } from "react-router-dom";

function App() {
  // State variables for managing products, cart, and messages
  const [originalProducts, setOriginalProducts] = useState([]); // Stores original unfiltered product list
  const [products, setProducts] = useState([]); // Stores current (filtered) product list
  const [error, setError] = useState(null); // Stores any errors from fetching data
  const [cartList, setCartList] = useState([]); // Stores the list of items in the cart
  const [cartCounter, setCartCounter] = useState(0); // Keeps track of total items in cart
  const [message, setMessage] = useState(null); // Stores messages for notifications
  const [showMessage, setShowMessage] = useState(false); // Controls visibility of messages

  // Fetch product data when the component mounts
  useEffect(() => {
    const fetchProductData = async () => {
      const url = "https://dummyjson.com/products"; // API endpoint for fetching products

      try {
        const response = await fetch(url, {
          method: "GET",
          mode: "cors",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setOriginalProducts(data.products); // Store the original product list
        setProducts(data.products); // Set current product list
      } catch (err) {
        console.error(err);
        setError(err.message); // Store any fetch errors
      }
    };

    fetchProductData();
  }, []);

  // Function to add a product to the cart
  const addToCart = (item) => {
    if (!cartList.includes(item)) {
      setCartList((prev) => [...prev, item]); // Add new item to cart
      setCartCounter((prevCounter) => prevCounter + 1); // Increase cart count
      showScreenMessage(`Added ${item.title} to cart`);
    } else {
      setCartList((prev) => [...prev, item]); // Duplicate entry to allow multiple same products
      setCartCounter((cartCounter) => cartCounter + 1);
      showScreenMessage(`Added ${item.title} to cart`);
    }
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    if (cartList.length > 0 && confirm("Clear all items in cart?")) {
      setCartList([]);
      setCartCounter(0);
    } else if (cartList.length == 0) {
      showScreenMessage("No items in cart");
    }
  };

  // Function to display a message for a few seconds
  const showScreenMessage = (msg) => {
    setMessage(msg);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  // Function to count how many times an item appears in the cart
  const cartTracker = (item, cartList) => {
    let itemCounter = 0;
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i] === item) {
        itemCounter++;
      }
    }
    return itemCounter;
  };

  // Function to handle quantity changes in the cart
  const handleChange = (e, product) => {
    const newQuantity = parseInt(e.target.value) || 0; // Parse quantity input

    if (newQuantity >= 0) {
      // Remove all instances of this product from the cart
      const filteredCart = cartList.filter((item) => item.id !== product.id);

      // Add the new quantity of the product to the cart
      const updatedCart = [
        ...filteredCart,
        ...Array(newQuantity).fill(product),
      ];

      setCartList(updatedCart);
      setCartCounter(updatedCart.length);

      // Display messages based on cart updates
      if (e.target.value > 0) {
        showScreenMessage(`Updated cart to ${newQuantity} ${product.title}`);
      } else {
        showScreenMessage(`Removed ${product.title}`);
      }
    }
  };

  // Dummy checkout function
  const checkoutDummy = () => {
    showScreenMessage("Not enough coins in your e-wallet");
  };
  654;
  // Function to filter products by category
  const filterProductList = (category) => {
    if (category === "all") {
      setProducts(originalProducts); // Reset to original product list
    } else {
      const filteredItems = originalProducts.filter(
        (item) => item.category === category
      );
      setProducts(filteredItems); // Set filtered products
    }
  };

  // Display error message if there's a problem fetching data
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
        <Outlet /> {/* Render child routes here */}
      </div>
    </ShopContext.Provider>
  );
}

export default App;
