export default class Filter {
  constructor(stores, storeName) {
    this.state = { ...stores[storeName] }
    console.log('filter', this.state)
    this.ids = this.state ? this.state.ids : []
  }

  getItemById(id) {
    return this.state ? this.state.items[id] : {}
  }

  getItems() {
    return this.ids.map((id) => this.getItemById(id))
  }
}
