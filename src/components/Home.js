import { Link } from "react-router-dom";
import Beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function Home() {
  return (
    <div className="Home" style={{ textAlign: "left" }}>
      <div>
        <img src={Beers} alt="beers" style={{ width: "390px" }} />
        <Link
          className="Links-Home"
          to={"/beers"}
          style={{
            textDecoration: "none",
            color: "black",
            marginBottom: "none",
            marginLeft: "50px",
          }}
        >
          <h2>All beers</h2>
        </Link>
        <p style={{ marginBottom: "50px", marginTop: "none" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus.
        </p>
      </div>
      <div>
        <Link
          className="Links-Home"
          to={"/beers/random"}
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <img
            src={randomBeer}
            alt="random-beer"
            style={{ width: "390px" }}
          />{" "}
          <h2>Random Beer</h2>{" "}
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus.
        </p>
      </div>
      <div>
        <Link
          className="Links-Home"
          to={"/beers/new"}
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <img src={newBeer} alt="new-beer" style={{ width: "390px" }} />{" "}
          <h2>New Beer</h2>{" "}
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus.
        </p>
      </div>
    </div>
  );
}

export default Home;
