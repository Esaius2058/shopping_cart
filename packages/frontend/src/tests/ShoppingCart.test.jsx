import { describe, expect, it } from "vitest";
import { render, screen, fireEvent} from "@testing-library/react";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { ShopContext } from "../components/ShopContext";
import Cart from "../components/ShoppingCart";

const mockCartList = [
  {
    id: 3,
    title: "Fragrance 1",
    thumbnail: "/path/to/img3.jpg",
    price: 11,
    description: "Good smelling fragrance",
		stock: 35,
  },
  {
    id: 8,
    title: "Grocery 2",
    thumbnail: "/path/to/img8.jpg",
    price: 4,
    description: "Fresh produce",
		stock: 10,
  },
  {
    id: 6,
    title: "Furniture 2",
    thumbnail: "/path/to/img6.jpg",
    price: 20,
    description: "Hardwood timber",
		stock: 4,
  },
];
const mockCartCounter = mockCartList.length;
const mockCartTracker = vi.fn();
const mockHandleChange = vi.fn();

const renderCart = () => {
  render(
    <BrowserRouter>
      <ShopContext.Provider
        value={{
          cartList: mockCartList,
          cartCounter: mockCartCounter,
          cartTracker: mockCartTracker,
          handleChange: mockHandleChange,
        }}
      >
        <Cart />
      </ShopContext.Provider>
    </BrowserRouter>
  );
};

describe("Shopping Cart", () => {
  it("renders the title and links correctly", () => {
    renderCart();

    expect(
      screen.getByRole("heading", { name: "Shopping Cart" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shop" })).toHaveAttribute(
      "href",
      "/shop"
    );
  });

  it("correctly displays product information", () => {
    renderCart();

    expect(screen.getByAltText("Grocery 2")).toBeInTheDocument();// images
    expect(screen.getByText("Hardwood timber")).toBeInTheDocument();// description
		expect(screen.getByText("35 in stock")).toBeInTheDocument();// stock
  });

	it("cart tracker and handlechange are working correctly", async () => {
		renderCart();

		const inputButtons = screen.getAllByRole("spinbutton");
		expect(mockCartTracker).toHaveBeenCalled(); //cart tracker
		fireEvent.change(inputButtons[0], {target: {value: "2"}});
		expect(inputButtons[0].value).toBe("2");// increment number of items which fires handlechange
		expect(mockHandleChange).toHaveBeenCalled();
	});
});
