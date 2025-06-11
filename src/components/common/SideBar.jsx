import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="absolute top-0 left-[10px] w-[208px] border-1 h-full">
      <div>
        <Link to="/ticket/listing">Ticket</Link>
      </div>
    </aside>
  );
};

export default SideBar;
