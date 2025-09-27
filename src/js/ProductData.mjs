// Helper to check response status and parse JSON
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    // Log the error response for debugging
    console.error("Bad Response:", res.status, res.url);
    throw new Error("Bad Response: " + res.status);
  }
}

// Add the baseURL from environment variables
const baseURL = import.meta.env.VITE_SERVER_URL;

export default class ProductData {
  // Remove category and path from constructor
  constructor() {

  }

  // Update getData to accept category, use async/await, and fetch from API
  async getData(category) {
    // New fetch URL for product search
    const response = await fetch(`${baseURL}products/search/${category}`);
    const data = await convertToJson(response);
    // Return data.Result because the API structure is different
    return data.Result;
  }

  //findProductById must query the API directly
  async findProductById(id) {
    // New fetch URL for a single product by ID
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    // Return data.Result
    return data.Result;
  }
}