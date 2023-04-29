import { createContext, useState } from "react";
export const CountryContext = createContext();

export function ProviderData(props) {
  const [countries, setCountries] = useState([]);
  const value = { countries, setCountries };

  return (
    <CountryContext.Provider value={value}>
      {props.children}
    </CountryContext.Provider>
  );
}
