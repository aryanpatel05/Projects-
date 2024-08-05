import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Mac from "./pages/mac/Mac";
import MacBuyPage from "./pages/Mbuy/MacBuyPage"; // Import new component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/MacBuyPage" element={<MacBuyPage />} />{" "}
          {/* New route */}
        </Routes>
        <div className="Footer-div">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
