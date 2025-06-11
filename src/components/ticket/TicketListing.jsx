import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";
import ReactPaginate from "react-paginate";

const TicketListing = ({ title }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();
  const [isloading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [currPage, setCurrPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const navigate = useNavigate();
  console.log(data);
  console.log(search);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQ5NTYxNTQ1LCJleHAiOjE3NTAyODE1NDV9.s6WIc7eVN9uP_nJWeNvg12T3zFjNwD-HA0tsV2ql-e4";

  useEffect(() => {
    setIsLoading(true);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .get(
        `http://195.35.8.196:6111/tickets/listing?page=${
          currPage + 1
        }&count=${itemsPerPage}`
      )
      .then((res) => {
        const data = res.data;
        setData(data.ud);
        setPageCount(Math.ceil(data.total / itemsPerPage));
        console.log(data);
      })
      .catch((err) => console.log(err, "Error"))
      .finally(() => {
        setIsLoading(false);
      });
  }, [currPage, itemsPerPage]);

  const handleAdd = () => {
    navigate("/ticket/add");
  };

  const handleView = (id) => {
    // console.log(id, "idididididdi");
    navigate(`/tickets/details/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/tickets/edit/${id}`);
  };

  const handleDelete = async (id) => {
    console.log(id, "deleteId");
    setIsLoading(true);
    try {
      await axios.delete(`http://195.35.8.196:6111/tickets/delete?id=${id}`);
      setData(data.filter((item) => item.id !== id));
      console.log("item Deleted");
    } catch (err) {
      console.log(err, "Error");
    } finally {
      setIsLoading(false);
    }
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterData = data.filter((item) => {
    return Object.values(item).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes(search)
    );
  });

  const dataToDisplay = search ? filterData : data;
  console.log(dataToDisplay);

  const handlePageClick = (e) => {
    setCurrPage(e.selected);
  };

  const handleItemPerPage = (e) => {
    setItemsPerPage(Number(e.target.value));
    setPageCount(0);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full p-2.5">
        {isloading ? (
          <Loader />
        ) : (
          <>
            <div className="flex justify-start w-full">
              <h1 className="text-2xl font-medium">{title}</h1>
            </div>
            <div className="flex justify-end items-center gap-4 px-12 w-full mt-2.5">
              <input
                className="border-2 py-1.5 px-3.5 rounded-2xl"
                type="search"
                placeholder="Search..."
                onChange={handleSearch}
                value={search}
              />
              <div>
                <select
                  onChange={handleItemPerPage}
                  value={itemsPerPage}
                  className="border-1 "
                >
                  <option value="1">{1}</option>
                  <option value="2">{2}</option>
                  <option value="3">{3}</option>
                  <option value="4">{4}</option>
                  <option value="5">{5}</option>
                  <option value="6">{6}</option>
                  <option value="7">{7}</option>
                  <option value="8">{8}</option>
                  <option value="9">{9}</option>
                  <option value="10">{10}</option>
                </select>
              </div>
              <div>
                <button
                  onClick={handleAdd}
                  className="border-1 py-1 px-3 bg-blue-400 text-white rounded-2xl"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full items-center">
              <div className="overflow-auto w-full">
                <table className="w-full mt-5 border-1">
                  <thead>
                    <tr>
                      <th className="border-1 p-2.5">Company Name</th>
                      <th className="border-1 p-2.5">Email</th>
                      <th className="border-1 p-2.5">Title</th>
                      <th className="border-1 p-2.5">Status</th>
                      <th className="border-1 p-2.5">Description</th>
                      <th className="border-1 p-2.5">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td className="border-1 p-2 text-center">
                            {item.userDetails.companyName}
                          </td>
                          <td className="border-1 p-2 text-center">
                            {item.userDetails.email}
                          </td>
                          <td className="border-1 p-2 text-center">
                            {item.title}
                          </td>
                          <td className="border-1 p-2 text-center">
                            {item.status}
                          </td>
                          <td className="border-1 p-2 text-center">
                            {item.description}
                          </td>
                          <td className="border-1 p-2 text-center">
                            <div className="flex justify-around items-center gap-2.5">
                              <button onClick={() => handleView(item.id)}>
                                <i className="text-2xl">
                                  <FaEye />
                                </i>
                              </button>
                              <button onClick={() => handleEdit(item.id)}>
                                <i className="text-2xl">
                                  <FaEdit />
                                </i>
                              </button>
                              <button onClick={() => handleDelete(item.id)}>
                                <i className="text-2xl">
                                  <MdDelete />
                                </i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center mt-3">
                <ReactPaginate
                  previousLabel={<button className="prev">Previous</button>}
                  nextLabel={<button className="nxt">Next</button>}
                  pageCount={pageCount}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={2}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                  forcePage={currPage}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TicketListing;
