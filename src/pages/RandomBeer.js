import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const RandomBeer = () => {
  //   const { id } = useParams();

  const [oneRandomBeer, setRandomBeer] = useState();

  const fetchRandomBeer = async (setter) => {
    const response = await fetch(
      "https://ih-beers-api2.herokuapp.com/beers/random"
    );
    const parsed = await response.json();

    setter(parsed);
  };

  useEffect(() => {
    fetchRandomBeer(setRandomBeer);
  }, []);

  useEffect(() => {
    console.log(oneRandomBeer);
  }, [oneRandomBeer]);

  return oneRandomBeer ? (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <img
          src={oneRandomBeer.image_url}
          alt={oneRandomBeer.name}
          style={{ height: "35vh" }}
        />
        <div className="details">
          <div className="leftColumn">
            <h2>{oneRandomBeer.name}</h2>
            <p className="silverText">{oneRandomBeer.tagline}</p>
          </div>
          <div className="rightColumn">
            <p className="silverText">{oneRandomBeer.attenuation_level}</p>
            <p>{oneRandomBeer.first_brewed}</p>
          </div>
        </div>
        <div className="description">
          <p>{oneRandomBeer.description}</p>
          <p className="silverText">{oneRandomBeer.contributed_by}</p>
        </div>
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default RandomBeer;
