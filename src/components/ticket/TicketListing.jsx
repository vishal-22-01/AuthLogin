import axios from "axios";
import React, { useEffect, useState } from "react";

const TicketListing = () => {
  const [data, setData] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQ5NTYxNTQ1LCJleHAiOjE3NTAyODE1NDV9.s6WIc7eVN9uP_nJWeNvg12T3zFjNwD-HA0tsV2ql-e4";

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .get("http://195.35.8.196:6111/tickets/listing")
      .then((res) => {
        const data = res.data;
        setData(data);
        console.log(data);
      })
      .catch((err) => console.log(err, "Error"));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center p-10">
        <div>
          <h1>Ticket Listing</h1>
        </div>
        <div className="flex justify-between items-center px-12 w-full mt-9">
          <div>
            <input
              className="border-2 py-1.5 px-3.5"
              type="search"
              placeholder="Search..."
            />
          </div>
          <div>
            <button className="border-1 ">Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketListing;
