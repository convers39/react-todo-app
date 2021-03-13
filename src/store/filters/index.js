export default class Filter {
  constructor(store, reducerName) {
    this.state = store[reducerName]
    this.ids = this.state ? this.state.ids : []
  }

  getItemById(id) {
    return this.state ? this.state.items[id] : {}
  }

  getItems() {
    return this.ids.map((id) => this.getItemById(id))
  }
}
