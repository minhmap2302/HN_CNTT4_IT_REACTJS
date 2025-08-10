type Product= {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number;
};
let listProduct: Product[] = [
  {
    id: "P001",
        name: "Sản phẩm A",     
        price: 100,
        category: {
            id: "C001",
            name: "Danh mục A"
        },
        discount: 10 
  },
  {
    id: "P002",
        name: "Sản phẩm B",
        price: 200,
        category: {
            id: "C002",
            name: "Danh mục B"
        }
  },
  {
    id: "P003",
        name: "Sản phẩm C",
        price: 300,
        category: {
            id: "C003",
            name: "Danh mục C"
        },
        discount: 20 
  }
];
function getFinalPrice(product: Product): number{
    if (product.discount) {
        return product.price - (product.price * product.discount / 100);
    }
    return product.price;
}
function printProductInfo(product: Product): void {
    const finalPrice = getFinalPrice(product);
    console.log(`Sản phẩm: ${product.name}, Giá gốc: ${product.price}, Giá sau giảm: ${finalPrice}, Danh mục: ${product.category.name}`);
}
listProduct.forEach(product => {
    printProductInfo(product);
});
