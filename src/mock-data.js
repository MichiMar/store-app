class Product {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

export default [
  new Product(1, "shirt", 19.99, "Sleeves sold seperatly"),
  new Product(2, "shoe", 29.99, "Buy one Get one 2x the price"),
  new Product(3, "Hat", 9.99, "Get a boggin' for your noggin"),
  new Product(4, "Hat 2", 13.99, "Electric Boogaloo"),
  new Product(5, "Sock", 5.99, "Big enought for your entire body")
];
