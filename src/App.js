import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Puff } from "react-loader-spinner";
import HomePage from "./pages/home/HomePage";
import Mac from "./pages/mac/Mac";
import MacBuyPage from "./pages/Mbuy/MacBuyPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <div className="loader-container">
            <Puff color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/mac" element={<Mac />} />
              <Route path="/MacBuyPage" element={<MacBuyPage />} />
            </Routes>
            <div className="Footer-div">
              <Footer />
            </div>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
