export type TaskType =
  | "Khẩn cấp"
  | "Quan trọng"
  | "Bình thường"
  | "Không quan trọng";
export type Todolist = {
  id: number;
  name: string;
  status: TaskType;
  checked: boolean;
};
export type Action =
  | { type: "ADDTASK"; payload: Todolist }
  | { type: "DELETETASK"; payload: { id: number } }
  | {
      type: "UPDATETASK";
      payload: { id: number; name: string; status: TaskType };
    }
  | { type: "TOGGLETASK"; payload: { id: number } }
  | { type: "FILTERTASK"; payload: { status: TaskType } }
  | { type: "TOGGLEALLTASK"}|{ type: "DELETEALL"};
