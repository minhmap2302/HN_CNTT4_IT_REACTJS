export interface Bill {
  id: number;
  owner: string;    
  amount: number;     
  status: "Đã thanh toán" | "Chưa thanh toán";
}
