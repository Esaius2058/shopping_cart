import App from "../App";
import ShopWrapper from "./ShopWrapper";
import ErrorPage from "./ErrorPage";
import Cart from "./ShoppingCart";
import ProductList from "./Products";
import Checkout from "./Checkout";

const MainRoutes = () => {
	const routes = [
    {
			path: "/home",
			element: <App />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: "shop",
					element: <ShopWrapper />,
					errorElement: <ErrorPage />,
					children: [
						{
							path: "",
							element: <ProductList />
						},
						{
							path: "cart",
							element: <Cart />
						},
						{
							path: "checkout",
							element: <Checkout />
						}
					]
				}
			]
		}
];

return routes;
};

export default MainRoutes;