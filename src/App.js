import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./fonts/fonts.css";

import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Home from "./pages/Home";
// LUGARES

//INMUEBLES MIAMI

//INMUEBLES TULUM

//INMUEBLES PLAYA DEL CARMEN

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
