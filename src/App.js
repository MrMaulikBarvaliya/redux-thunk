import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "./redux/action/Action";
import User from "./component/User";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Product from "./component/Product";

function App() {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.userData);

  const { loading, error, users } = selectedUser;

  useEffect(() => {
    dispatch(UserAction());
  }, [dispatch]);

  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter> */}
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <User users={users} />
      )}
    </div>
  );
}

export default App;
