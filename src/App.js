import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Routes/Home/Home";
import Information from "./Routes/Information/Information"
import About from "./Routes/About/About";
import Navbar from "./Components/Navbar";
import Admin from "./Routes/Admin/Admin";

function App() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/information" element={<Information />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </main>
  )
}

export default App;
