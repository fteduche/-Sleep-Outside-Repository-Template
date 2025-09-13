import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `
    <li class="product-card">
      <a href="../product_pages/product-detail.html?product=${product.Id}">
        <img src="../images/${product.Image}" alt="${product.Name}">
        <h3>${product.Name}</h3>
      </a>
      <p>${product.Description}</p>
      <p class="price">$${product.FinalPrice}</p>
    </li>
  `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const products = await this.dataSource.getData();
    this.renderList(products);
  }

  renderList(products) {
    renderListWithTemplate(
      productCardTemplate,
      this.listElement,
      products,
      "afterbegin",
      true
    );
  }
}
