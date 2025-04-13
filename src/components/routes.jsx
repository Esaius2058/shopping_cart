import App from "../App";
import ShopWrapper from "./ShopWrapper";
import ErrorPage from "./ErrorPage";
import Cart from "./ShoppingCart";
import ProductList from "./Products";
import Checkout from "./Checkout";
import HomePage from "./Home";
import About from "./About";
import Description from "./ProductDescription";

const MainRoutes = () => {
  // Define an array of route configurations
  const routes = [
    {
      path: "/", // Root path of the application
      element: <App />, // Main application component that acts as a wrapper
      errorElement: <ErrorPage />, // Error page in case of navigation errors
      children: [ // Nested routes inside App component
        {
          index: true, // Default route when visiting "/"
          element: <HomePage />, // Home page component
        },
        {
          path: "shop", // Route for the shop section
          element: <ShopWrapper />, // Wrapper for shop-related pages
          children: [ // Nested routes inside ShopWrapper
            {
              path: "", // Default path when visiting "/shop"
              element: <ProductList />, // Displays list of products
            },
            {
              path: "cart", // Route for shopping cart
              element: <Cart />, // Shopping cart component
            },
            {
              path: "checkout", // Route for the checkout page
              element: <Checkout />, // Checkout component
            },
            {
              path: ":productId", // Dynamic route for product descriptions (e.g., "/shop/1")
              element: <Description />, // Product description component
            }
          ],
        },
        {
          path: "about", // Route for the about page
          element: <About />,
        }
      ],
    },
  ];

  return routes; // Return the defined routes
};

export default MainRoutes; // Export the MainRoutes component