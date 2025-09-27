import { setLocalStorage, getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();

// Step 6: ProductData is initialized WITHOUT a category, relying on its new API methods
const dataSource = new ProductData();

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}

// add to cart button event handler
async function addToCartHandler(e) {
  // Uses the refactored ProductData.findProductById API call
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// Step 6: Get the product ID from the URL parameter 'product'
const productId = getParam("product");

// Create and initialize the ProductDetails class
const product = new ProductDetails(productId, dataSource);
product.init();

// Attach listener to Add to Cart button (this button is now rendered by ProductDetails)
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);