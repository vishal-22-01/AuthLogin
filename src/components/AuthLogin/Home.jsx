import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const navigate = useNavigate();
  //   const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  //   const handlenavigateLogin = () => {
  //     navigate("/login");
  //   };
  return (
    <>
      <div className="flex justify-between items-center p-7">
        <h1 className="text-2xl">Home Page</h1>
        <div className="flex items-center gap-4">
          {/* <div>{isAuthenticated && user.name}</div> */}
          {/* {isAuthenticated ? (
            <button
              className="border-1 border-white bg-blue-400 rounded-[10px] text-white py-1.5 w-32"
              onClick={() => logout(window.location.origin)}
            >
              Log out
            </button>
          ) : (
            <button
              className="border-1 border-white bg-blue-400 rounded-[10px] text-white py-1.5 w-32 "
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          )} */}
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      </div>
    </>
  );
};

export default Home;
