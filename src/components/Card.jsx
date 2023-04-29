import "../stylesheets/Card.css";

function Card({
  country,
  capital,
  flag,
  languages,
  region,
  population,
  currencies,
  area,
  borders,
  googleMaps,
}) {
  const separateBorders = () => {
    let newBorders = "";
    if (borders === undefined) {
      newBorders = "---";
    } else {
      borders.map((select, index) => {
        if (index === 0) {
          newBorders = newBorders + select;
        } else {
          newBorders = newBorders + " / " + select;
        }
      });
    }

    return newBorders;
  };

  const separateLanguages = () => {
    const object = Object.values(languages);
    let newLanguages = "";
    object.map((language, index) => {
      if (index === 0) {
        newLanguages = newLanguages + language;
      } else {
        newLanguages = newLanguages + " / " + language;
      }
    });
    return newLanguages;
  };

  const separateCurrencies = () => {
    const keys = Object.keys(currencies);
    const newObject = currencies[keys[0]];
    const array = Object.values(newObject);

    let newCurrencies = "";
    array.map((value, index) => {
      if (index === 0) {
        newCurrencies = newCurrencies + value;
      } else {
        newCurrencies = newCurrencies + " (" + value + ")";
      }
    });
    return newCurrencies;
  };

  return (
    <div className="cardContainer">
      <div className="country">
        <p>{country}</p>
      </div>
      <div className="capital">
        <p>capital:{capital} </p>
      </div>
      <div className="flagContainer">
        <img src={flag} alt="Flag of Argentina" />
      </div>
      <div className="moreInfo">
        <p>languages: {separateLanguages()}</p>
        <p>currencies: {separateCurrencies()} </p>
        <p>region: {region}</p>
        <p>population: {population} </p>
        <p>area: {area} km2</p>
        <p>borders: {separateBorders()}</p>
      </div>
      <div className="mapsButton">
        <a href={googleMaps} className="button" target="_blank">
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}

export default Card;
