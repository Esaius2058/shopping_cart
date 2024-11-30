import App from "../App";
import ShopWrapper from "./ShopWrapper";
import ErrorPage from "./ErrorPage";
import Cart from "./ShoppingCart";
import ProductList from "./Products";
import Checkout from "./Checkout";
import HomePage from "./Home";

const MainRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index:true,
          element: <HomePage />,
        },
        {
          path: "shop",
          element: <ShopWrapper />,
          children: [
            {
              path: "",
              element: <ProductList />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "checkout",
              element: <Checkout />,
            },
          ],
        },
      ],
    },
  ];

  return routes;
};

export default MainRoutes;
