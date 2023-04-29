import "../stylesheets/ViewCards.css";
import { useContext } from "react";
import { CountryContext } from "../context/ProviderData";
import Card from "./Card";
import { BiSad } from "react-icons/bi";

function ViewCards() {
  const { countries } = useContext(CountryContext);

  if (countries.status === 404) {
    return (
      <div className="cardsContainer">
        <div>
          <BiSad size="20em" />
        </div>
      </div>
    );
  } else if (countries.length === 0 || countries.length > 30) {
    return (
      <div className="mapaMundi">
        <img
          src="https://www.pnguniverse.com/wp-content/uploads/2020/09/Mapamundi-azul.png"
          alt="mapamundi"
        />
      </div>
    );
  } else {
    return (
      <div className="cardsContainer">
        {countries.map((country, index) => (
          <Card
            id={index}
            key={index}
            country={country.name.common}
            capital={country.capital}
            flag={country.flags.png}
            languages={country.languages}
            currencies={country.currencies}
            region={country.continents}
            population={country.population}
            area={country.area}
            borders={country.borders}
            googleMaps={country.maps.googleMaps}
          />
        ))}
      </div>
    );
  }
}
//country,capital,flag,currencies,region,population,area,borders,googleMaps
export default ViewCards;
