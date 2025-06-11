// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Loader from "../loader/Loader";

// const Edit = () => {
//   const [getData, setGetData] = useState({
//     companyName: "",
//     email: "",
//     description: "",
//     title: "",
//     comment: "",
//   });
//   const [isLoading, setIsLoading] = useState(true);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   console.log(getData);

//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQ5NTYxNTQ1LCJleHAiOjE3NTAyODE1NDV9.s6WIc7eVN9uP_nJWeNvg12T3zFjNwD-HA0tsV2ql-e4";

//   useEffect(() => {
//     setIsLoading(true);
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     axios
//       .get(`http://195.35.8.196:6111/tickets/details?ticketId=${id}`)
//       .then((res) => {
//         const data = res.data.ud;
//         setGetData({
//           companyName: data.userDetails?.companyName || "",
//           email: data.userDetails?.email || "",
//           title: data.title || "",
//           description: data.description || "",
//           comment: data.comment || "",
//         });
//       })
//       .catch((err) => console.log(err, "Error"))
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setGetData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleBack = () => {
//     navigate("/ticket/listing");
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center flex-col gap-8 py-8">
//         <h1 className="text-2xl font-medium">Edit Ticket</h1>
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <form className="flex flex-col justify-start items-start gap-2.5">
//             <div className="flex flex-col justify-start items-start gap-1">
//               <label>Company Name:</label>
//               <input
//                 className="border-1 py-1 px-2.5 rounded-[10px]"
//                 type="text"
//                 name="companyName"
//                 value={getData.companyName}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="flex flex-col justify-start items-start gap-1">
//               <label>Email:</label>
//               <input
//                 className="border-1 py-1 px-2.5 rounded-[10px]"
//                 type="email"
//                 name="email"
//                 value={getData.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="flex flex-col justify-start items-start gap-1">
//               <label>Title:</label>
//               <input
//                 className="border-1 py-1 px-2.5 rounded-[10px]"
//                 type="text"
//                 name="title"
//                 value={getData.title}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="flex flex-col justify-start items-start gap-1">
//               <label>Description:</label>
//               <input
//                 className="border-1 py-1 px-2.5 rounded-[10px]"
//                 type="text"
//                 name="description"
//                 value={getData.description}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="flex flex-col justify-start items-start gap-1">
//               <label>Comment:</label>
//               <input
//                 className="border-1 py-1 px-2.5 rounded-[10px]"
//                 type="text"
//                 name="comment"
//                 value={getData.comment}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="flex justify-center items-center gap-3 w-full">
//               <button className="border-1 py-1 px-3 bg-blue-400 text-white rounded-2xl">
//                 save
//               </button>
//               <button
//                 onClick={handleBack}
//                 className="border-1 py-1 px-3 bg-blue-400 text-white rounded-2xl"
//               >
//                 Back
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </>
//   );
// };

// export default Edit;
