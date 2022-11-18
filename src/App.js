import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Beers from "./pages/Beers";

function App() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    const fetchBeers = async () => {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
      const beers = await response.json();
      setBeers(beers);
    };
    fetchBeers();
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
      </Routes>
    </div>
  );
}

export default App;
