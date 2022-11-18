import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, SetContributedBy] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://ih-beers-api2.herokuapp.com/beers/new",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          tagline,
          description,
          first_brewed: firstBrewed,
          brewers_tips: brewersTips,
          attenuation_level: attenuationLevel,
          contributed_by: contributedBy,
        }),
      }
    );

    const parsed = await response.json();
    console.log(parsed);
    navigate("/beers");
  };
  return (
    <div>
      <Navbar />
      <h3>Add new Beer</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Tagline:
          <input
            value={tagline}
            onChange={(event) => setTagline(event.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label>
          First brewed:
          <input
            value={firstBrewed}
            onChange={(event) => setFirstBrewed(event.target.value)}
          />
        </label>
        <label>
          Brewers Tips:
          <input
            value={brewersTips}
            onChange={(event) => setBrewersTips(event.target.value)}
          />
        </label>
        <label>
          Attenuation level:
          <input
            value={attenuationLevel}
            onChange={(event) => setAttenuationLevel(event.target.value)}
          />
        </label>
        <label>
          Contributed by:
          <input
            value={contributedBy}
            onChange={(event) => SetContributedBy(event.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewBeer;
