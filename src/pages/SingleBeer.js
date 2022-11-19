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

  // useEffect(() => {
  //   console.log(oneBeer);
  // }, [oneBeer]);

  return oneBeer ? (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }} className="singleBeer">
        <img
          src={oneBeer.image_url}
          alt={oneBeer.name}
          style={{ height: "35vh" }}
        />
        <div className="details">
          <div className="leftColumn">
            <h2>{oneBeer.name}</h2>
            <p>{oneBeer.tagline}</p>
          </div>
          <div className="rightColumn">
            <p className="silverText">{oneBeer.attenuation_level}</p>
            <p>{oneBeer.first_brewed}</p>
          </div>
        </div>
        <div className="description">
          <p>{oneBeer.description}</p>
          <p>{oneBeer.contributed_by}</p>
        </div>
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default SingleBeer;
