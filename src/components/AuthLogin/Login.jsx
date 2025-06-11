import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { encryptData } from "../encrypt";
import Loader from "../loader/Loader";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isloading, setLoading] = useState(false);
  console.log(form);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      setLoading(true);
      navigate("/");
    } else {
      console.log("data is not found");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...form,
    };

    const encryptPayload = encryptData(payload);

    await axios
      .post("http://195.35.8.196:6111/user/admin/login", {
        data: encryptPayload,
      })
      .then((res) => {
        const data = res.data;
        navigate("/");
        setForm(data.ud.access_token);

        if (data.success === true) {
          localStorage.setItem("token", data.ud.access_token);
        }
        console.log(data);
      })
      .catch((err) => console.log(err, "Error"))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col w-full h-[100vh]">
        {isloading ? (
          <Loader />
        ) : (
          <div className="p-5 flex justify-between items-center flex-col gap-9 rounded-2xl w-96 bg-blue-400">
            <h1 className="text-2xl text-white">Login</h1>
            <form
              onSubmit={handleSubmit}
              className="flex justify-start items-start flex-col w-full"
            >
              <div className="relative flex justify-start items-start mb-5 flex-col w-full">
                <label className="text-white">Email</label>
                <i className="absolute top-[34px] text-white left-2.5">
                  <MdEmail />
                </i>
                <input
                  className=" border-1 w-full border-white py-1.5 pl-8 rounded-[10px] text-white focus:outline-0"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
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
                  required
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Enter Password"
                />
              </div>
              <div className="flex justify-end w-full text-white">
                Forget Password?
              </div>

              <div className="flex justify-center items-center gap-4 mt-5 w-full">
                {/* <button
                onClick={handleNavigateSignUp}
                className="border-1 border-white rounded-[10px] text-white py-1.5 w-32 focus:bg-white focus:text-blue-400"
              >
                Sign Up
              </button> */}
                <button
                  type="submit"
                  className="border-1 border-white rounded-[10px] text-white py-1.5 w-32 focus:bg-white focus:text-blue-400"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
