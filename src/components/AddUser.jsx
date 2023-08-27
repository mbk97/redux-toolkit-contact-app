import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeUserModal } from "../redux/modal";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "../redux/slice";

const AddUser = () => {
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  const { name, email } = inputData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const payload = {
    id: uuidv4(),
    name,
    email,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("All fields are required", { theme: "colored" });
      return;
    } else {
      dispatch(addUser(payload));
      dispatch(closeUserModal());
    }
  };

  return (
    <div className="flex w-[500px] justify-center items-center bg-[white]">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="w-[300px] mb-5 outline-0 p-2 border border-[black] rounded-md "
            placeholder="Full name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="w-[300px] mb-5 outline-0 p-2 border border-[black] rounded-md "
            placeholder="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-[#12bc09] text-[#ffffff] cursor-pointer  p-1 rounded-[10px] mr-5 h-[45px] w-[120px] mt-4"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
