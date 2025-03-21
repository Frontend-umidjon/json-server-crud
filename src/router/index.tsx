import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Users from "./users/Users";
import AddUser from "./addUser/AddUser";

const MainRouter= () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="add-user" element={<AddUser />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;