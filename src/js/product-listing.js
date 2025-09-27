import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import { loadHeaderFooter, getParam } from './utils.mjs';

// Load the header and footer template elements
loadHeaderFooter();

// Get the category parameter from the URL 
// The URL will look like: product_listing/index.html?category=tents
const category = getParam('category').toLowerCase();

// --- Step 8: Fix the title ---
// Get the page title element
const titleElement = document.querySelector('.products h2');

// Capitalize the first letter of the category for a nice title display
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Update the heading to include the category name (e.g., "Top Products: Tents")
if (category) {
    titleElement.innerHTML = `Top Products: ${capitalizeFirstLetter(category)}`;
} else {
    // Fallback if no category is provided
    titleElement.innerHTML = `Top Products`;
}
// -----------------------------

// Create an instance of the ProductData class.
// Note: ProductData.mjs is expected to be refactored to not require a category in its constructor. (Step 4.3)
const dataSource = new ProductData();

// Get the element where the product list will be rendered
const element = document.querySelector('.product-list');

// Create an instance of the ProductList class, passing the category, data source, and rendering element (Step 5)
const myList = new ProductList(category, dataSource, element);

// Call the init method to fetch and display the products (Step 5)
myList.init();