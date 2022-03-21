import { Route, Routes } from "react-router-dom";
import Menubar from "./components/Header/Menubar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <Menubar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
