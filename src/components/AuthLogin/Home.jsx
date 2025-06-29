import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserImage from "../../assets/Images/user.png";

const Home = () => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //   const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  //   const handlenavigateLogin = () => {
  //     navigate("/login");
  //   };
  const navigateTicket = () => {
    navigate("/ticket/listing");
  };
  return (
    <>
      <div className="flex justify-between items-start p-7">
        <h1 className="text-2xl">Home Page</h1>
        <div className="flex items-center gap-4">
          <div className="dropdown  flex flex-col items-center p-3 gap-3.5 w-44">
            <img className="w-8" src={UserImage} onClick={toggleDropdown} />
            {isOpen && (
              <div className="dropDown_menu flex flex-col justify-center items-center border-1">
                <button
                  className="border-b-1 p-2.5 w-full"
                  onClick={navigateTicket}
                >
                  Ticket
                </button>
                <button className="p-2.5" onClick={handleLogOut}>
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
