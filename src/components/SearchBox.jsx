import { useContext, useState } from "react";
import { CountryContext } from "../context/ProviderData";
import "../stylesheets/SearchBox.css";
import { BiSearchAlt2 } from "react-icons/bi";

function SearchBox() {
  const [countrySearch, setCountrySearch] = useState("");
  const { setCountries } = useContext(CountryContext);

  const searchBoxText = (e) => {
    const target = e.target.value;
    setCountrySearch(target);
  };
  const search = () => {
    searchCountries(countrySearch);
  };

  const searchCountries = (text) => {
    fetch(`https://restcountries.com/v3.1/translation/${text}`)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="searchContainer">
      <input
        className="inputSearch"
        type="text"
        placeholder="Enter country name"
        onChange={searchBoxText}
        value={countrySearch}
      />
      <button onClick={search} className="buttonSearch" type="button">
        <BiSearchAlt2 size="2em" />
      </button>
    </div>
  );
}

export default SearchBox;
