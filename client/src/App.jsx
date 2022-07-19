import { Navbar, Welcome } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./AdminPanel/Admin";

const Home = () => {
  return (
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
