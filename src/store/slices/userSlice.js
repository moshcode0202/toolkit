import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "amanda", email: "amanda@mail.com" },
  { id: 2, name: "john", email: "john@mail.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      // console.log(state, action);
    },
    editUser: (state, action) => {
      // console.log(state, action);
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export default userSlice.reducer;
export const { addUser, editUser, deleteUser } = userSlice.actions;
