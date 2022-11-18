import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const SingleBeer = () => {
  const { id } = useParams();

  const [oneBeer, setOneBeer] = useState();

  const fetchOneBeer = async (setter) => {
    const response = await fetch(
      `https://ih-beers-api2.herokuapp.com/beers/${id}`
    );
    const parsed = await response.json();

    setter(parsed);
  };

  useEffect(() => {
    fetchOneBeer(setOneBeer);
  }, []);

  useEffect(() => {
    console.log(oneBeer);
  }, [oneBeer]);

  return oneBeer ? (
    <>
      <Navbar />
      <img src={oneBeer.image_url} alt={oneBeer.name} />
      <h2>{oneBeer.name}</h2>
      <p>{oneBeer.tagline}</p>
      <p>{oneBeer.contributed_by}</p>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default SingleBeer;
