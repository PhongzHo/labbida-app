import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Home,NewsPage,ContactJob,Library,Member } from "./pages";

function App() {
  return (
    <div className="bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labbida-app" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/api/news" element={<NewsPage />} />
          <Route path="/contactJob" element={<ContactJob />} />
          <Route path="/library" element={<Library />} />
          <Route path="/member" element={<Member />} />
        </Routes>
    </div>

  );
}

export default App;
