export type student = {
  id: number;
  name: string;
  age: number;
  grade: string;
};
export type init={
    status: "idle" | "pending" | "success" | "failed";
    data:student[]
    error:null|undefined|string
}