import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter} from "react-router-dom";
import App from "../App";

// Mock fetch API
global.fetch = vi.fn(() => 
	Promise.resolve({
		ok: true,
		json: () => 
			Promise.resolve({
				products: [
					{id: 1, title: "Product 1", thumbnail: "thum1.jpg"},
					{id: 2, title: "Product 2", thumbnail: "thum2.jpg"},
				],
			}),
	})
);

//Mock outlet
vi.mock("react-router-dom",() => {
	const actual = require("react-router-dom"); //Preserve other functionality
	
	return {
		...actual, //Preserve other functionalities
		Outlet: () => <div data-testid="mock-outlet">Mocked Outlet Content</div>
	}
});

describe("App component", () => {
	afterEach(() => {
		vi.resetAllMocks(); //Reset fetch 
	});

	it("renders the correct heading", async () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);

		expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();

		await waitFor(() => {
			expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/products", {
				method: "GET",
				mode: "cors",
			});
		});
	});
});

describe("App component handles fetch error", () => {
	it("catches fetch error", async () => {
		//Mock a fetch error
		fetch.mockImplementationOnce(() => 
			Promise.reject(new Error("Failed to fetch"))
		);

		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);


		await waitFor(() => {
			expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
		});
	});
});

describe("App component with mocked Outlet", async () => {
	it("renders the App component with outlet mocked", () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
	
		expect(screen.getByTestId("mock-outlet")).toBeInTheDocument();
		expect(screen.getByText("Mocked Outlet Content")).toBeInTheDocument();
	});
});