import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAddUserModal: false,
  openEditUserModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenUserModal: (state) => {
      state.openAddUserModal = true;
    },
    closeUserModal: (state) => {
      state.openAddUserModal = false;
    },
    setOpenEditUserModal: (state) => {
      state.openEditUserModal = true;
    },
    setCloseEditUserModal: (state) => {
      state.openEditUserModal = false;
    },
  },
});

export const {
  setOpenUserModal,
  closeUserModal,
  setOpenEditUserModal,
  setCloseEditUserModal,
} = modalSlice.actions;

export default modalSlice.reducer;
