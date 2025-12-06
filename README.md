# MyStore - Angular E-commerce Application

## Project Description
MyStore is a single-page e-commerce application built with Angular. It allows users to browse products, view details, add items to a shopping cart, manage the cart, and proceed to checkout.

## Key Features
- **Product List**: View a list of available products.
- **Product Details**: View detailed information about a specific product.
- **Shopping Cart**: Add products, update quantities, and remove items.
- **Checkout**: Fill out a form with validation to place an order.
- **Order Confirmation**: Receive a confirmation message with the order total.
- **Responsive Design**: Clean and responsive UI.

## Installation Steps
1. Clone the repository (if applicable) or download the source code.
2. Navigate to the project directory:
   ```bash
   cd MyStore
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## How to Run the Project
1. Start the development server:
   ```bash
   ng serve
   ```
2. Open your browser and navigate to `http://localhost:4200/`.

## Notes for Reviewer
- The application uses `HttpClient` to fetch product data from `assets/data.json`.
- The `CartService` manages the state of the shopping cart and persists data in memory (refreshes on reload).
- Form validation is implemented in the Checkout component.
