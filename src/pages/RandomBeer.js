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
      <img src={oneRandomBeer.image_url} alt={oneRandomBeer.name} />
      <h2>{oneRandomBeer.name}</h2>
      <p>{oneRandomBeer.tagline}</p>
      <p>{oneRandomBeer.first_brewed}</p>
      <p>{oneRandomBeer.attenuation_level}</p>
      <p>{oneRandomBeer.description}</p>
      <p>{oneRandomBeer.contributed_by}</p>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default RandomBeer;
