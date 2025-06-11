import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../loader/Loader";

const View = () => {
  const [data, setData] = useState([]);
  const { ticketId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  console.log(data);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQ5NTYxNTQ1LCJleHAiOjE3NTAyODE1NDV9.s6WIc7eVN9uP_nJWeNvg12T3zFjNwD-HA0tsV2ql-e4";

  useEffect(() => {
    setIsLoading(true);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .get(`http://195.35.8.196:6111/tickets/details?ticketId=${ticketId}`)
      .then((res) => {
        setData([res.data.ud]);
      })
      .catch((err) => console.log(err, "Error"))
      .finally(() => {
        setIsLoading(false);
      });
  }, [ticketId]);

  const handleBack = () => {
    navigate("/ticket/listing");
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-9 py-5">
        <h1 className="text-2xl font-medium">Ticket Detail</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="">
            {data.map((item) => {
              return (
                <div className="flex justify-center items-center flex-col gap-5">
                  <p>Company Name: {item.userDetails.companyName}</p>
                  <p>Email: {item.userDetails.email}</p>
                  <p>Title: {item.title}</p>
                  <p>Status: {item.status}</p>
                  <p>Description: {item.description}</p>
                  <p>Comment: {item.comment}</p>
                  <button
                    className="border-1 py-1 px-3 bg-blue-400 text-white rounded-2xl"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default View;
