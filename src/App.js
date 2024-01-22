import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Home,Blog,ContactJob,Library,Feedback } from "./pages";

function App() {
  return (
    <div className="bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labbida-app" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactJob" element={<ContactJob />} />
          <Route path="/library" element={<Library />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
    </div>

  );
}

export default App;


