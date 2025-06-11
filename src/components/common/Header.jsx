import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserImage from "../../assets/Images/user.png";

const Header = () => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigateTicket = () => {
    navigate("/ticket/listing");
  };
  return (
    <>
      <div className="flex justify-between items-start px-7 mb-6">
        <h1 className="text-2xl p-3">Trendex</h1>
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

export default Header;
