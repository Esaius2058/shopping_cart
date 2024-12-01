import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { ShopContext } from "../components/ShopContext";
import HomePage from "../components/Home";

describe("Home Component", () => {
  const mockProducts = [
    { id: 1, title: "Beauty Product 1", thumbnail: "/path/to/img1.jpg" },
    { id: 2, title: "Beauty Product 2", thumbnail: "/path/to/img2.jpg" },
    { id: 3, title: "Fragrance 1", thumbnail: "/path/to/img3.jpg" },
    { id: 4, title: "Fragrance 2", thumbnail: "/path/to/img4.jpg" },
    { id: 5, title: "Furniture 1", thumbnail: "/path/to/img5.jpg" },
    { id: 6, title: "Furniture 2", thumbnail: "/path/to/img6.jpg" },
    { id: 7, title: "Grocery 1", thumbnail: "/path/to/img7.jpg" },
    { id: 8, title: "Grocery2", thumbnail: "/path/to/img8.jpg" },
  ];

  it("correctly renders key elements like link and title", () => {
    render(
      <BrowserRouter>
        <ShopContext.Provider value={{ products: mockProducts }}>
          <HomePage />
        </ShopContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("DIGERO")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shop" })).toHaveAttribute(
      "href",
      "/shop"
    );
  });

  it("renders beauty products", () => {
    render(
      <BrowserRouter>
        <ShopContext.Provider value={{products: mockProducts}}>
          <HomePage />
        </ShopContext.Provider>
      </BrowserRouter>
    );

		expect(screen.getByText("Beauty Products")).toBeInTheDocument();
		const beautyProdImages = screen.getAllByAltText(/Beauty Product/i);
		expect(beautyProdImages.length).toBe(2);
  });

	it("renders groceries", () => {
    render(
      <BrowserRouter>
        <ShopContext.Provider value={{ products: mockProducts }}>
          <HomePage />
        </ShopContext.Provider>
      </BrowserRouter>
    );

    
    expect(screen.getByText("Groceries")).toBeInTheDocument();
    const groceryImages = screen.getAllByAltText(/Grocery/i);
    expect(groceryImages.length).toBe(2); // Mock has 2 groceries
  });
});
