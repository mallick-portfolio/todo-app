
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import HomePage from "./components/pages/HomePage";
import AddUser from "./components/User/AddUser";
import ShowUser from "./components/User/ShowUser";
import EditUser from "./components/User/EditUser";
function App() {

  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path={`/users/show/`} element={<ShowUser />} />
        <Route path={`/users/edit/:id`} element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
