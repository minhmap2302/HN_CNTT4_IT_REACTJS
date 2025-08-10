type Product = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: Product;
  quantity: number;
  note?: string; 
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  deliveryAddress: string;
  isPaid: boolean;
};

type Invoice = {
  invoiceId: string;
  orders: Order[];
  createdAt: Date;
};


function calculateInvoiceTotal(invoice: Invoice): number {
  return invoice.orders.reduce((sum, order) => {
    const orderTotal = order.items.reduce(
      (subtotal, item) => subtotal + item.product.price * item.quantity,
      0
    );
    return sum + orderTotal;
  }, 0);
}


function getUnpaidOrders(invoice: Invoice): Order[] {
  return invoice.orders.filter((order) => !order.isPaid);
}


function printInvoice(invoice: Invoice): void {
  console.log(
    `HÓA ĐƠN: #${invoice.invoiceId} - Ngày tạo: ${
      invoice.createdAt.toISOString().split("T")[0]
    }`
  );
  console.log(`------------------------------\n`);

  invoice.orders.forEach((order) => {
    console.log(`ĐƠN HÀNG: #${order.orderId} - ${order.customerName}`);
    order.items.forEach((item) => {
      const notePart = item.note ? ` (note: ${item.note})` : "";
      console.log(
        `- ${item.product.name} × ${item.quantity} → ${
          item.product.price * item.quantity
        } VND${notePart}`
      );
    });

    const orderTotal = order.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    console.log(`\nTổng đơn: ${orderTotal.toLocaleString()} VND`);
    console.log(
      `\nTrạng thái: ${order.isPaid ? "ĐÃ THANH TOÁN" : "CHƯA THANH TOÁN"}\n`
    );
  });

  const total = calculateInvoiceTotal(invoice);
  console.log(`>> Tổng cộng hóa đơn: ${total.toLocaleString()} VND`);
}
const aoSoMi: Product = { id: "P01", name: "Áo sơ mi", price: 250_000 };
const quanJean: Product = { id: "P02", name: "Quần jean", price: 400_000 };
const vayHoa: Product = { id: "P03", name: "Váy hoa", price: 700_000 };

const invoice: Invoice = {
  invoiceId: "INV001",
  createdAt: new Date("2024-05-14"),
  orders: [
    {
      orderId: "ORD001",
      customerName: "Nguyễn Văn A",
      deliveryAddress: "Hà Nội",
      isPaid: true,
      items: [
        { product: aoSoMi, quantity: 2 },
        { product: quanJean, quantity: 1 },
      ],
    },
    {
      orderId: "ORD002",
      customerName: "Trần Thị B",
      deliveryAddress: "TP.HCM",
      isPaid: false,
      items: [{ product: vayHoa, quantity: 1, note: "size M" }],
    },
  ],
};

printInvoice(invoice);
