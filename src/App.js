import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Beers from "./pages/Beers";
import SingleBeer from "./pages/SingleBeer";
import RandomBeer from "./pages/RandomBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
        <Route path="/beers/random" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
