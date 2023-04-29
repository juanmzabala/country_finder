import "../stylesheets/ShowResults.css";
import { useContext } from "react";
import { CountryContext } from "../context/ProviderData";

function ShowResults() {
  const { countries } = useContext(CountryContext);
  if (countries.status === 404) {
    return (
      <div className="resultsContainer">
        <div className="numberOfResults">
          <p>0 results</p>
        </div>
        <div className="results">
          <div className="error">
            Try using different words to search for the country...
          </div>
        </div>
      </div>
    );
  } else if (countries.length > 30) {
    return (
      <div className="resultsContainer">
        <div className="numberOfResults">
          <p>too much results</p>
        </div>
        <div className="results">
          <div className="error">
            Try using more specifics words to search for the country...
          </div>
        </div>
      </div>
    );
  } else if (countries.length === 0) {
    return <div></div>;
  } else {
    return (
      <div className="resultsContainer">
        <div className="numberOfResults">
          <p>{`${countries.length} ${
            countries.length === 1 ? "result" : "results"
          }`}</p>
        </div>
        <div className="results">
          {countries.map((country, index) => (
            <div
              className="result"
              key={index}
            >{`${country.flag} ${country.name.common}`}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default ShowResults;
