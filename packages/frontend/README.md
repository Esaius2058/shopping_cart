DIGERO: E-Commerce Web App

DIGERO is a modern e-commerce web application that allows users to browse products, add items to a shopping cart, and simulate the shopping experience. The app fetches product data dynamically and provides features like cart management, a clear cart option, and a mock checkout process.
Features

    Product Display: Browse through a variety of categories including Beauty Products, Fragrances, Furniture, and Groceries.
    Shopping Cart:
        Add items to the cart and manage quantities.
        View cart subtotal and total number of items.
        Clear the cart with a confirmation prompt.
    Mock Checkout: A confirmation message for users without payment integration.
    Dynamic Messaging: Real-time feedback for actions like adding to the cart or clearing it.
    Responsive Design: Adapted for various screen sizes.

Technologies Used

    React: For building the user interface.
    React Router: For navigation and routing.
    Context API: For state management across the app.
    CSS: For styling components.

Installation

    Clone the repository:

git clone https://github.com/yourusername/digero.git
cd digero

Install dependencies:

npm install

Start the development server:

    npm start

    Open the app in your browser at http://localhost:3000.

File Structure

    src/components: Contains the main components such as ProductList, Cart, Checkout, HomePage, and the ShopContext.
    src/assets: Holds assets like icons for navigation and the cart.
    src/App.js: Main entry point for the application logic and context setup.
    src/App.css: Contains global styles for the application.

Usage

    Start the app and explore the Home Page for introductory information.
    Navigate to the Shop page to browse and add items to your cart.
    Go to the Cart to update quantities or proceed to checkout.
    Confirm your order at the Checkout Page, simulating the order placement.

Key Components
ShopContext

The ShopContext provides global state management for:

    Product list
    Cart items and count
    Dynamic messages for user interactions

HomePage

Introduces users to DIGERO and provides quick links to product categories.
ProductList

Displays all available products and allows users to add them to the cart.
Cart

Lists items in the cart, handles quantity updates, and calculates the subtotal.
Checkout

Final step where users can view a summary of their order and simulate order confirmation.
API Used

    DummyJSON Products API: Provides product data for the app. Endpoint: https://dummyjson.com/products

Future Enhancements

    Integrate payment gateway for real checkout functionality.
    Add user authentication and profile management.
    Include more product filters and sorting options.
    Implement a dark mode toggle for better accessibility.

License

This project is licensed under the MIT License. See the LICENSE file for details.
Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.