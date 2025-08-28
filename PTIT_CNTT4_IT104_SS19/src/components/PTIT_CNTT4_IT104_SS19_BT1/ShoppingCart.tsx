export default function ShoppingCart() {
    type Product = {
        id:number,
        name:string,
        price: number,
        quantity: number
    }
    const ProductList: Product[] = [
        {
            id:1,
            name:"bun bo",
            price:10000,
            quantity: 12
        },
        {
            id:2,
            name:"bun hue",
            price:30000,
            quantity: 12
        },
    ]
    const totalPrice = ProductList.reduce((sum,item)=> (sum+ item.price * item.quantity),0);
  return (
    <div>
      <ul>
        {ProductList.map((item)=>
            <li key = {item.id}>
                {item.name}-{item.price}Đ x {item.quantity} ={""}
                {item.price * item.quantity}Đ
            </li>
        )}
      </ul>
      <h3>Tong: {totalPrice}</h3>
    </div>
  )
}
