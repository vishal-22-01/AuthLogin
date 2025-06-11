import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/AuthLogin/Login";
import Home from "./components/AuthLogin/Home";
// import SignUp from "./components/AuthLogin/SignUp";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import TicketListing from "./components/ticket/TicketListing";
import Add from "./components/ticket/Add";
import View from "./components/ticket/View";
// import Layout from "./components/layout/Layout";
// import Header from "./components/common/Header";
// import Edit from "./components/ticket/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route element={""}>
            <Route
              path="/ticket/listing"
              element={<TicketListing title="Ticket Listing" />}
            />
            <Route path="/ticket/add" element={<Add />} />
            <Route path="/tickets/details/:ticketId" element={<View />} />
            <Route path="/tickets/edit/:id" element={<Add />} />
          </Route>
        </Route>
        {/* <Route path="/signUp" element={<SignUp />} /> */}
      </Routes>
    </>
  );
}

export default App;
