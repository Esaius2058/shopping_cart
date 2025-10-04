import { describe, expect, it, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import ProductList from "../components/Products";
import { ShopContext } from "../components/ShopContext";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Products Component", () => {
  const mockProducts = [
    {
      id: 1,
      title: "Beauty Product 1",
      thumbnail: "/path/to/img1.jpg",
      price: 10,
    },
    {
      id: 2,
      title: "Beauty Product 2",
      thumbnail: "/path/to/img2.jpg",
      price: 13,
    },
    { id: 3, title: "Fragrance 1", thumbnail: "/path/to/img3.jpg", price: 11 },
    { id: 4, title: "Fragrance 2", thumbnail: "/path/to/img4.jpg", price: 12 },
    { id: 5, title: "Furniture 1", thumbnail: "/path/to/img5.jpg", price: 35 },
    { id: 6, title: "Furniture 2", thumbnail: "/path/to/img6.jpg", price: 20 },
    { id: 7, title: "Grocery 1", thumbnail: "/path/to/img7.jpg", price: 2 },
    { id: 8, title: "Grocery2", thumbnail: "/path/to/img8.jpg", price: 4 },
  ];

  const mockCartCounter = 3;
  const mockMessage = "Successfully added to cart";
  const mockAddToCart = vi.fn();

	const renderProductList = () =>
		render(
			<BrowserRouter>
				<ShopContext.Provider
					value={{
						products: mockProducts,
						cartCounter: mockCartCounter,
						message: mockMessage,
						addToCart: mockAddToCart,
					}}
				>
					<ProductList />
				</ShopContext.Provider>
			</BrowserRouter>
		);

  it("the cart counter and message is in sync with the state", () => {
    renderProductList();

    expect(screen.getByText("Cart Items: 3")).toBeInTheDocument();
    expect(screen.getByText("Successfully added to cart")).toBeInTheDocument();
  });

  it("the products are correctly displayed on the screen", async () => {
    renderProductList();

		//Product title and price
    expect(screen.getByText("Beauty Product 1")).toBeInTheDocument();
		expect(screen.getByText("$35")).toBeInTheDocument();
  });

	it("The Add To Cart button works correctly", async () => {
		renderProductList();

		const user = userEvent.setup();
		const cartButtons = screen.getAllByRole("button", {name: "Add To Cart"});
		await user.click(cartButtons[0]);

		expect(mockAddToCart).toHaveBeenCalledOnce();
	});
});
