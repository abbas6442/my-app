import { useState } from "react";
import "./App.css";
import "../src/styles/nav.css";
import "../src/styles/Home.css";
import "../src/styles/Footer.css";
import "../src/styles/mediaquery.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Islam from "./Components/Islam";
import Footer from "./Components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Islam" element={<Islam />} />
          <Route path="/Quran" />
          <Route path="/Hadees" />
          <Route path="/About" />
          <Route path="/Contact" />

          <Route
            path="*"
            element={
              <div>
                <h1>Page Not Found 404</h1>
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
