import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

// create an instance of ProductData
const dataSource = new ProductData("tents");

// find the list element in the HTML
const element = document.querySelector(".product-list");

// create an instance of ProductList
const productList = new ProductList("tents", dataSource, listElement);

// call the init method to load and render the list
productList.init();