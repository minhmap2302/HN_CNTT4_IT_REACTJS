export type todo = {
  id: number;
  taskName: string;
  completed: boolean;
  priority: string;
};
export type Task={
  taskName: string;
  completed: boolean;
  priority: string;
}
export type init ={
     status: "idle" | "pending" | "success" | "failed";
     data:todo[];
     error:null|undefined|string
}