const products = [
  {
    name: "A",
    price: 100,
    discount: 0.1,
    quantity: 2
  },
  {
    name: "B",
    price: 100,
    discount: 0.2,
    quantity: 1,
    bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 },
  },
  {
    name: "C",
    price: 300,
    discount: 0.1,
    quantity: 3,
    bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 },
  },
];
function getOrderSummary(products) {
  let totalBefore = 0;
  let totalAfter = 0;
  let detail = [];

  products.forEach((product) => {
    let { name, price, discount, quantity, bulkDiscount } = product;
    totalBefore += price * quantity;

    let finalPrice = price * (1 - discount);
    if (bulkDiscount && quantity >= bulkDiscount.minQuantity) {
      finalPrice *= 1 - bulkDiscount.extraDiscount;
    }

    finalPrice = Math.round(finalPrice * 100) / 100;
    let subtotal = finalPrice * quantity;
    totalAfter += subtotal;

    detail.push({
      name,
      finalPrice,
      quantity,
      subtotal,
    });
  });

  return {
     totalBefore,
     totalAfter,
    detail,
  };
}



console.log(getOrderSummary(products));
