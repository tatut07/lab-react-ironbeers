import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const Beers = ({ beers }) => {
  const [beersArr, setBeersArr] = useState([]);

  const fetchBeers = async (setter) => {
    try {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
      const parsed = await response.json();
      setter(parsed);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBeers(setBeersArr);
  }, []);

  return (
    <div>
      <Navbar />
      {beersArr.map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            {/* <Link to={beer.name}>{beer.name}</Link> */}
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
