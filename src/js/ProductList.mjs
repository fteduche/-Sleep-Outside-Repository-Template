export default class ProductList {
  constructor(category, dataSource, listElement, titleElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.titleElement = titleElement;
  }

  async init() {
    try {
      const list = await this.dataSource.getData(this.category);
      this.renderList(list);

      if (this.titleElement) {
        this.titleElement.textContent = this.category;
      } else {
        console.error('Title element not found');
      }
    } catch (error) {
      console.error('Error initializing product list:', error);
    }
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}