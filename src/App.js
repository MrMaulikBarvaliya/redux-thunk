import "./App.css";
import React from "react";
// Authentication
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./components/pages/auth/LoginReg";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";

// Redux-thunk
// import { useDispatch, useSelector } from "react-redux";
// import { UserAction } from "./redux/action/Action";
// import User from "./component/User";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Product from "./component/Product";

function App() {
  // const dispatch = useDispatch();
  // const selectedUser = useSelector((state) => state.userData);
  // const { loading, error, users } = selectedUser;
  // useEffect(() => {
  //   dispatch(UserAction());
  // }, [dispatch]);

  return (
    // <div>
    //   {/* <BrowserRouter>
    //     <Routes>
    //       <Route path="/product/:id" element={<Product />} />
    //     </Routes>
    //   </BrowserRouter> */}
    //   {loading ? (
    //     <h3>Loading...</h3>
    //   ) : error ? (
    //     <h2>{error}</h2>
    //   ) : (
    //     <User users={users} />
    //   )}
    // </div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
