import * as readlineSync from 'readline-sync';
class Customer {
    private static idCounter = 1;
    public id: number;
    public name: string;
    public email: string;
    public shippingAddress: string;

    constructor(name: string, email: string, shippingAddress: string) {
        this.id = Customer.idCounter++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }

    getDetails(): string {
        return `id: ${this.id} - ${this.name} - ${this.email} - ${this.shippingAddress}`;
    }
}

abstract class Product {
    private static idCounter = 1;   
    public id: number;
    public name: string;
    public price: number;
    public stock: number;

    constructor(name: string, price: number, stock: number) {
        this.id = Product.idCounter++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    sell(quantity: number): void {
        if (quantity <= 0) {
            console.log(`Số lượng phải lớn hơn 0`);
            return;
        }
        if (quantity > this.stock) {
            console.log(`Không đủ hàng tồn kho`);
            return;
        }
        this.stock -= quantity;
    }

    restock(quantity: number): void {
        if (quantity <= 0) {
            console.log(`Số lượng phải lớn hơn 0`);
            return;
        }
        this.stock += quantity;
    }

    abstract getProductInfo(): string;
    abstract getShippingCost(distance: number): number;
    abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
    constructor(
        name: string,
        price: number,
        stock: number,
        public warrantyPeriod: number
    ) {
        super(name, price, stock);
    }

    getProductInfo(): string {
        return `${this.name} - ${this.price} VND, Bảo hành: ${this.warrantyPeriod} tháng`;
    }

    getShippingCost(_: number): number {
        return 50000;
    }

    getCategory(): string {
        return "Electronics";
    }
}

class ClothingProduct extends Product {
    constructor(
        name: string,
        price: number,
        stock: number,
        public size: string,
        public color: string
    ) {
        super(name, price, stock);
    }

    getProductInfo(): string {
        return `${this.name} - ${this.price} VND, Size: ${this.size}, Màu: ${this.color}`;
    }

    getShippingCost(_: number): number {
        return 25000;
    }

    getCategory(): string {
        return "Clothing";
    }
}

class Order {
    private static idCounter = 1;
    public orderID: number;
    public customer: Customer;
    public products: { product: Product; quantity: number }[];
    public totalAmount: number;

    constructor(customer: Customer, products: { product: Product; quantity: number }[]) {
        this.orderID = Order.idCounter++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = products.reduce((sum, p) => sum + p.product.price * p.quantity,0);
    }

    getDetails(): string {
        let productList = this.products.map(p => `${p.product.name} x${p.quantity} = ${p.product.price * p.quantity} VND`).join("\n");
        return `Order #${this.orderID}\nCustomer: ${this.customer.name}\n${productList}\nTotal: ${this.totalAmount} VND`;
    }
}

class Store {
    static productIdCount = 1;
    static customerIdCount = 1;
    static orderIdCount = 1;

    products: Product[];
    customers: Customer[];
    orders: Order[];

    constructor(products: Product[], customers: Customer[], orders: Order[]){
        this.products = products;
        this.customers = customers;
        this.orders = orders;
    }

    addProduct(product: Product): void{
        this.products.push(product);
    }

    addCustomer(name: string, email: string, shippingAddress: string) : void{
        let newCustomer = new Customer(name,email,shippingAddress);
        this.customers.push(newCustomer);
    }

    createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | null {
        let customer = this.customers.find(c => c.id === customerId);
        if (!customer) return null;

        let productsForOrder: { product: Product, quantity: number }[] = [];

        for (let pq of productQuantities) {
            let product = this.products.find(p => p.id === pq.productId);
            if (!product || pq.quantity > product.stock) return null;
            product.sell(pq.quantity);
            productsForOrder.push({ product, quantity: pq.quantity });
        }

        let newOrder = new Order(customer, productsForOrder);
        this.orders.push(newOrder);
        return newOrder;
    }

    cancelOrder(orderId: number): void {
    let order = this.orders.find(o => o.orderID === orderId);
    if (!order) return;
    order.products.forEach(item => {
        item.product.restock(item.quantity);
    });
    this.orders = this.orders.filter(o => o.orderID !== orderId);
}


    listAvailableProducts(): void {
        let available = this.products.filter(p => p.stock > 0);
        console.log("San pham con hang: ");
        available.forEach(p => console.log(p.getProductInfo()));
    }

    listCustomerOrders(customerId: number): void {
        this.orders.filter(o => o.customer.id === customerId).forEach(o => console.log(o.getDetails()));
    }

    calculateTotalRevenue(): number {
        return this.orders.reduce((sum,order) => sum + order.totalAmount, 0);
    }

    countProductsByCategory(): void {
        let counts = this.products.reduce((acc, p) => {
            acc[p.getCategory()] = (acc[p.getCategory()] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
        console.log(counts);
    }

    // updateProductStock(productId: number, newStock: number): void {
    //     let index = this.products.findIndex(p => p.id === productId);
    //     if (index !== -1) {
    //         this.products[index].stock = newStock;
    //     }
    // }

    findById<T extends { id: number }>(items: T[], id: number): T | undefined {
        return items.find(item => item.id === id);
    }

    viewProductDetails(productId: number): void {
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            console.log("Không tìm thấy sản phẩm!");
            return;
        }
        console.log(product.getProductInfo());
    }
}

let store = new Store([], [], []);

while (true) {
    console.log(`
    ===== MENU =====
    1. Thêm khách hàng mới
    2. Thêm sản phẩm mới
    3. Tạo đơn hàng mới
    4. Hủy đơn hàng
    5. Hiển thị sản phẩm còn hàng
    6. Hiển thị đơn hàng của khách hàng
    7. Tính tổng doanh thu
    8. Thống kê sản phẩm theo danh mục
    9. Cập nhật tồn kho sản phẩm
    10. Tìm kiếm thông tin bằng ID (Customer/Product)
    11. Xem thông tin chi tiết sản phẩm
    12. Thoát
`);

    let choice = readlineSync.questionInt("Chọn chức năng: ");
    switch (choice) {
        case 1:
            let name = readlineSync.question("Tên khách hàng: ");
            let email = readlineSync.question("Email: ");
            let address = readlineSync.question("Địa chỉ: ");
            store.addCustomer(name, email, address);
            break;
        case 2:
            let type = readlineSync.question("Loại sản phẩm (1-Điện tử, 2-Quần áo): ");
            let pname = readlineSync.question("Tên sản phẩm: ");
            let price = readlineSync.questionFloat("Giá: ");
            let stock = readlineSync.questionInt("Tồn kho: ");
            if (type === "1") {
                let warranty = readlineSync.questionInt("Bảo hành (tháng): ");
                store.addProduct(new ElectronicsProduct(pname, price, stock, warranty));
            } else {
                let size = readlineSync.question("Size: ");
                let color = readlineSync.question("Màu: ");
                store.addProduct(new ClothingProduct(pname, price, stock, size, color));
            }
            break;
        case 3:
            let cid = readlineSync.questionInt("ID khách hàng: ");
            let pid = readlineSync.questionInt("ID sản phẩm: ");
            let qty = readlineSync.questionInt("Số lượng: ");
            let order = store.createOrder(cid, [{ productId: pid, quantity: qty }]);
            if (order) console.log(order.getDetails());
            break;
        case 4:
            let oid = readlineSync.questionInt("ID đơn hàng: ");
            store.cancelOrder(oid);
            break;
        case 5:
            console.log(store.listAvailableProducts());
            break;
        case 6:
            let cid2 = readlineSync.questionInt("ID khách hàng: ");
            console.log(store.listCustomerOrders(cid2));
            break;
        case 7:
            console.log(`Tổng doanh thu: ${store.calculateTotalRevenue()} VND`);
            break;
        case 8:
            console.log(store.countProductsByCategory());
            break;
        case 9:
            // let pid2 = readlineSync.questionInt("ID sản phẩm: ");
            // let newStock = readlineSync.questionInt("Tồn kho mới: ");
            // store.updateProductStock(pid2, newStock);
            // break;
        case 10:
            const searchType = readlineSync.question("Tìm Customer hay Product? (c/p): ");
            const searchId = readlineSync.questionInt("Nhập ID: ");
            if (searchType.toLowerCase() === 'c') {
                const customer = store.findById(store.customers, searchId);
                if (customer) console.log(customer.getDetails());
                else console.log("Không tìm thấy khách hàng!");
            } else if (searchType.toLowerCase() === 'p') {
                const product = store.findById(store.products, searchId);
                if (product) console.log(product.getProductInfo());
                else console.log("Không tìm thấy sản phẩm!");
            }
            break;

        case 11:
            const pidDetail = readlineSync.questionInt("Nhập ID sản phẩm: ");
            store.viewProductDetails(pidDetail);
            break;

        case 0:
            // process.exit();
    }
}