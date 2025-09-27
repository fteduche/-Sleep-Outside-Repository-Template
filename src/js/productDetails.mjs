import { renderWithTemplate, loadTemplate } from './utils.mjs';

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.dataSource = dataSource;
        this.product = {};
    }

    productTemplate(product) {
        // Fix the image path to use PrimaryLarge from the API data (Step 7) 
        const imagePath = product.Images.PrimaryLarge;

        // Return the HTML string
        return `<section class="product-detail">
          <h2>${product.Brand.Name}</h2>
          <h3 class="divider">${product.Name}</h3>
          <img
            class="divider"
            src="${imagePath}"
            alt="${product.Name}"
          />
          <p class="product-card__price">$${product.FinalPrice}</p>
          <p class="product__color">${product.Colors[0].ColorName}</p>
          <p class="product__description">
            ${product.DescriptionHtmlSimple}
          </p>
          <div class="product-detail__add">
            <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
          </div>
        </section>`;
    }

    async init() {
        this.product = await this.dataSource.findProductById(this.productId);

        const parentElement = document.querySelector('main');

        //FIX: Use innerHTML to insert the template. 
        // If your 'renderWithTemplate' utility function is causing the error, 
        // removing it and using direct innerHTML often resolves the CSP violation
        // that sometimes occurs with complex template handling utilities.
        parentElement.innerHTML = this.productTemplate(this.product);

        // Update the document title 
        document.querySelector('title').textContent = `Sleep Outside | ${this.product.Name}`;

        // The event listener is attached in product.js, so we don't need to return it here.
    }
}