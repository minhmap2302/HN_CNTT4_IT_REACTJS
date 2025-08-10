type Product = {
    readonly id: string;
    name: string;
    price: number;
}
type OrderItem = {
    product: Product;
    quantity: number;
}
type Order = {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string; 
}

function calculateOrderTotal(order: Order): number {
   order.items.forEach(item => {
        console.log(`Sản phẩm: ${item.product.name}, Số lượng: ${item.quantity}--> Giá: ${item.product.price}`);
    });
    return order.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);    
}
function printOrderSummary(order: Order): void {
    console.log(`Đơn hàng ID: ${order.orderId}, Khách hàng: ${order.customerName}`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
    const total = calculateOrderTotal(order);
    console.log(`Tổng giá trị đơn hàng: ${total}`);
}
let order: Order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        {
            product: {
                id: "P001",
                name: "Sản phẩm A",
                price: 100
            },
            quantity: 2
        },
        {
            product: {
                id: "P002",
                name: "Sản phẩm B",
                price: 200
            },
            quantity: 1
        }
    ],
    note: "Giao hàng nhanh"
};
printOrderSummary(order);