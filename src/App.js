import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Users from "./pages/Users";
import UpdateUser from "./pages/UpdateUser";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/update/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
