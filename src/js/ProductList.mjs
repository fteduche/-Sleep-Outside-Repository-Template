import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    // Step 7: Fix the image path to use PrimaryMedium from API data
    const imagePath = product.Images.PrimaryMedium;

    // Fix the product detail link to use the 'product' parameter
    return `
    <li class="product-card">
      <a href="../product_listing.html?product=${product.Id}">
        <img src="${imagePath}" alt="Image of ${product.Name}">
        <h2>${product.Brand.Name}</h2>
        <h3>${product.NameWithoutBrand}</h3>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
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
        // Step 4.6: Change the call to pass 'this.category' to the refactored getData
        const list = await this.dataSource.getData(this.category);
        this.renderList(list);
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
}