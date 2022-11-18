import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Beers from "./pages/Beers";
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
