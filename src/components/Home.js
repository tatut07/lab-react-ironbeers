import { Link } from "react-router-dom";
import Beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function Home() {
  return (
    <div className="Home">
      <div>
        <Link className="Links-Home" to={"/beers"}>
          {" "}
          <img src={Beers} alt="beers" /> <h2>All beers</h2>{" "}
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </div>
      <div>
        <Link className="Links-Home" to={"/random-beer"}>
          {" "}
          <img src={randomBeer} alt="random-beer" /> <h2>Random Beer</h2>{" "}
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </div>
      <div>
        <Link className="Links-Home" to={"/new-beer"}>
          {" "}
          <img src={newBeer} alt="new-beer" /> <h2>New Beer</h2>{" "}
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </div>
    </div>
  );
}

export default Home;
