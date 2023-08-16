import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";
import CreateUser from "../components/CreateUser";

// create users
export const addUser = createAsyncThunk("addUser", async (data, {rejectWithValue}) =>{
  const response = await fetch("https://64ae8a91c85640541d4d423a.mockapi.io/users", {
    method : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try{
    const result = await response.json();
    return result;
  }catch(error){
    return rejectWithValue(error);
  }
})

// read users
export const getUser = createAsyncThunk("getUser", async (data, {rejectWithValue}) =>{
  const response = await fetch("https://64ae8a91c85640541d4d423a.mockapi.io/users");

  try{
    const result = await response.json();
    return result;
  }catch(error){
    return rejectWithValue(error);
  }
})

// delete user
export const deleteUser = createAsyncThunk("deleteUser", async (id, {rejectWithValue}) =>{
  const response = await fetch(`https://64ae8a91c85640541d4d423a.mockapi.io/users/${id}`, {
    method : "DELETE"
  });

  try{
    const result = await response.json();
    return result;
  }catch(error){
    return rejectWithValue(error);
  }
})

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  // reducers: {
  //   addUser: (state, action) => {
  //     state.push(action.payload);
  //   },
  //   updateUser: (state, action) => {
  //     const { id, name, email, phone } = action.payload;
  //     const userToUpdate = state.find((user) => user.id == id);
  //     if (userToUpdate) {
  //       userToUpdate.name = name;
  //       userToUpdate.email = email;
  //       userToUpdate.phone = phone;
  //     }
  //   },
  //   deleteUser: (state, action) => {
  //     const { id } = action.payload;
  //     const userToDelete = state.find((user) => user.id == id);
  //     if (userToDelete) {
  //       return state.filter((f) => f.id !== id);
  //     }
  //   },
  // },
  extraReducers: {
    [addUser.pending] : (state) =>{
      state.loading = true;
    },
    [addUser.fulfilled] : (state, action) => {
      state.users.push(action.payload)
    },
    [addUser.rejected] : (state, action) =>{
      state.loading = false;
      state.error = action.payload.message;
    },
    [getUser.pending] : (state) =>{
      state.loading = true;
    },
    [getUser.fulfilled] : (state, action) => {
      state.users = (action.payload)
    },
    [getUser.rejected] : (state, action) =>{
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteUser.pending] : (state) =>{
      state.loading = true;
    },
    [deleteUser.fulfilled] : (state, action) => {
      const {id} = action.payload;
      if(id){
        state.users = state.users.filter((user) => user.id !== id)
      }
    },
    [deleteUser.rejected] : (state, action) =>{
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

// export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;