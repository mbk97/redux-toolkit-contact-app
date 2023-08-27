import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
    },
    updateUser: (state, { payload }) => {
      const { id, name, email } = payload;
      const userToUpdate = state.users.find((user) => user.id === id);
      if (userToUpdate) {
        userToUpdate.name = name;
        userToUpdate.email = email;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
