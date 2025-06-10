import axios from "axios";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { encryptData } from "../encrypt";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmittion = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
    };

    const encryptPayload = encryptData(payload);
    axios
      .post("http://195.35.8.196:6111/user/admin/login", {
        data: encryptPayload,
      })
      .then((res) => {
        const data = res.data;
        setFormData(data);
      })
      .catch((err) => console.log(err, "Error"));
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full h-[100vh]">
        <div className="p-5 flex justify-between items-center flex-col gap-9 rounded-2xl w-96 bg-blue-400">
          <h1 className="text-2xl text-white">Sign Up</h1>
          <form
            onSubmit={handleFormSubmittion}
            className="flex justify-start items-start flex-col w-full"
          >
            <div className="relative flex justify-start items-start w-full mb-5 flex-col">
              <label className="text-white">Name</label>
              <i className="absolute top-[34px] text-white left-2.5">
                <FaUser />
              </i>
              <input
                className=" border-1 w-full border-white py-1.5 pl-8 rounded-[10px] text-white focus:outline-0"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                autoComplete="off"
                placeholder="Enter Name"
              />
            </div>
            <div className="relative flex justify-start items-start mb-5 flex-col w-full">
              <label className="text-white">Email</label>
              <i className="absolute top-[34px] text-white left-2.5">
                <MdEmail />
              </i>
              <input
                className=" border-1 w-full border-white py-1.5 pl-8 rounded-[10px] text-white focus:outline-0"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                autoComplete="off"
                placeholder="Enter Email"
              />
            </div>
            <div className="relative flex justify-start items-start mb-2.5 flex-col w-full">
              <label className="text-white">Password</label>
              <i className="absolute top-[34px] text-white left-2.5">
                <RiLockPasswordFill />
              </i>
              <input
                className=" border-1 w-full border-white py-1.5 pl-8 rounded-[10px] text-white focus:outline-0"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                autoComplete="off"
                placeholder="Enter Password"
              />
            </div>
            <div className="flex justify-center items-center gap-4 mt-5 w-full">
              <button
                type="submit"
                className="border-1 border-white rounded-[10px] text-white py-1.5 w-32 focus:bg-white focus:text-blue-400"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
