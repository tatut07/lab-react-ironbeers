import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Beers = ({ beers }) => {
  const [beersArr, setBeersArr] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState("");

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

  const handleSearchInput = (event) => {
    setFilteredBeers(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div>
        <input
          value={filteredBeers}
          placeholder="Search for a beer"
          type="text"
          onChange={handleSearchInput}
          className="searchBar"
        />
      </div>
      <div>
        {beersArr.length === 0 ? (
          <h1>Oops! There is no more content to show!</h1>
        ) : (
          beersArr
            .filter((beer) => {
              const lowerFilter = filteredBeers.toLowerCase();
              return beer.name.toLowerCase().includes(lowerFilter);
            })
            .map((beer) => {
              return (
                <div key={beer._id} className="oneBeer">
                  <img
                    src={beer.image_url}
                    alt={beer.name}
                    style={{ height: "25vh" }}
                  />
                  <div className="oneBeerText">
                    <Link to={`/beers/${beer._id}`}>
                      <h2>{beer.name}</h2>
                    </Link>
                    <p style={{ color: "lightgray" }}>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                  </div>
                </div>
              );
            })
        )}
      </div>
    </div>
  );
};

export default Beers;
