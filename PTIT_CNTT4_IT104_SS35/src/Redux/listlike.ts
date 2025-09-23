import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  favorite: boolean;
}

const initialState: { value: User[] } = {
  value: [
    { id: 1, name: "Nguyễn Văn A", favorite: false },
    { id: 2, name: "Nguyễn Văn B", favorite: true },
    { id: 3, name: "Nguyễn Văn C", favorite: false },
    { id: 4, name: "Nguyễn Văn D", favorite: false },
  ],
};

const userSlices = createSlice({
  name: "like",
  initialState,
  reducers: {
    like: (state, actions: PayloadAction<number>) => {
      const user = state.value.find((u) => u.id === actions.payload);
      if (user) {
        user.favorite = !user.favorite;
      }
    },
  },
});
export const { like } = userSlices.actions;
export default userSlices.reducer;
