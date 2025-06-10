import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/AuthLogin/Login";
import Home from "./components/AuthLogin/Home";
// import SignUp from "./components/AuthLogin/SignUp";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import TicketListing from "./components/ticket/TicketListing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/ticket/listing" element={<TicketListing />} />
        </Route>
        {/* <Route path="/signUp" element={<SignUp />} /> */}
      </Routes>
    </>
  );
}

export default App;
