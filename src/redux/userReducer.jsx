import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email, phone } = action.payload;
      const userToUpdate = state.find((user) => user.id == id);
      if (userToUpdate) {
        userToUpdate.name = name;
        userToUpdate.email = email;
        userToUpdate.phone = phone;
      }
    },
  },
});

export const { updateUser } = userSlice.actions;
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
