
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import HomePage from "./components/pages/HomePage";
import AddUser from "./components/User/AddUser";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/users/add" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
