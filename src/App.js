import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Routes/Home/home.jsx";
import NavigationBar from "./Components/Routes/NavigationBar/navigationBar.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
