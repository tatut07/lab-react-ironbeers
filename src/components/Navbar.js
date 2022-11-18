import { NavLink } from "react-router-dom";
import home from "../assets/home.png";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <img
          src={home}
          alt="home link"
          style={{ width: "100vw", height: "15opx" }}
        />
      </NavLink>
    </nav>
  );
}

export default Navbar;
