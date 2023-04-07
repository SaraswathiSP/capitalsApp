import { useState } from "react";

import "./index.css";

const countryAndCapitalsList = [
  {
    id: "NEW_DELHI",
    capitalDisplayText: "New Delhi",
    country: "India"
  },
  {
    id: "LONDON",
    capitalDisplayText: "London",
    country: "United Kingdom"
  },
  {
    id: "PARIS",
    capitalDisplayText: "Paris",
    country: "France"
  },
  {
    id: "KATHMANDU",
    capitalDisplayText: "Kathmandu",
    country: "Nepal"
  },
  {
    id: "HELSINKI",
    capitalDisplayText: "Helsinki",
    country: "Finland"
  }
];

const Capitals = () => {
  const [activeCountry, setActiveCountry] = useState(
    countryAndCapitalsList[0].id
  );

  const onChangeCountry = (event) => {
    setActiveCountry(event.target.value);
  };

  const getCountry = () => {
    const selectedCapital = countryAndCapitalsList.find(
      (each) => each.id === activeCountry
    );
    return selectedCapital ? selectedCapital.country : "";
  };

  return (
    <div className="app-container">
      <div className="capitals-container">
        <h1 className="heading">Countries And Capitals</h1>
        <div className="question-container">
          <select
            className="capital-select"
            onChange={onChangeCountry}
            value={activeCountry}
          >
            {countryAndCapitalsList.map((each) => (
              <option key={each.id} value={each.id} className="option">
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <p className="question">is capital of which country?</p>
        </div>

        <p className="country">{getCountry()}</p>
      </div>
    </div>
  );
};

export default Capitals;
