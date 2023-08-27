import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddUser from "./AddUser";
import {
  closeUserModal,
  setCloseEditUserModal,
  setOpenEditUserModal,
  setOpenUserModal,
} from "../redux/modal";
import CustomModal from "./CustomModal";
import {
  TableContainer,
  TableHead,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import EditUser from "./EditUser";
import { deleteUser } from "../redux/slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const [editData, setEditData] = useState({});
  const users = useSelector((state) => state.user.users);
  const modalToggle = useSelector((state) => state.modal.openAddUserModal);
  const toggleEditModal = useSelector((state) => state.modal.openEditUserModal);

  const handleOpenAddUser = () => {
    dispatch(setOpenUserModal());
  };

  const handleCloseAddUser = () => {
    dispatch(closeUserModal());
  };

  const handleOpenEditModal = (item) => {
    setEditData(item);
    dispatch(setOpenEditUserModal());
  };

  const handleCloseEditModal = () => {
    dispatch(setCloseEditUserModal());
  };

  return (
    <div className="flex justify-center items-center flex-col mt-10 ">
      <h1 className="text-[22px] md:text-[30px] font-semibold">
        Redux Toolkit User App
      </h1>
      <div className="md:w-[800px] w-full mt-7">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length !== 0 ? (
                users.map((item, index) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>
                        <button
                          className="bg-[#4545ec] text-[#ffffff] cursor-pointer p-1 rounded-[10px] mr-5 h-[45px] w-[80px]"
                          onClick={() => handleOpenEditModal(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-[#e0574d] text-[#ffffff] cursor-pointer  p-1 rounded-[10px] mr-5 h-[45px] w-[80px]"
                          onClick={() => dispatch(deleteUser(item.id))}
                        >
                          Delete
                        </button>
                      </TableCell>{" "}
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell>No contact added</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <button
        onClick={handleOpenAddUser}
        className="bg-[#12bc09] text-[#ffffff] cursor-pointer  p-1 rounded-[10px] mr-5 h-[45px] w-[120px] mt-8"
      >
        Add user +
      </button>

      {modalToggle ? (
        <CustomModal
          open={modalToggle}
          title={"Add user"}
          handleClose={handleCloseAddUser}
        >
          <AddUser />
        </CustomModal>
      ) : null}
      {toggleEditModal ? (
        <CustomModal
          open={toggleEditModal}
          title={"Edit user"}
          handleClose={handleCloseEditModal}
        >
          <EditUser data={editData} />
        </CustomModal>
      ) : null}
    </div>
  );
};

export default HomePage;
