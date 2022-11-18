import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Beers = ({ beers }) => {
  const [beersArr, setBeersArr] = useState([]);

  const fetchBeers = async (setter) => {
    try {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
      console.log(response);
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
            <Link to={`/beers/${beer._id}`}>
              <h2>{beer.name}</h2>
            </Link>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
