import "./App.css";
import { ProviderData } from "./context/ProviderData";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";
import ShowResults from "./components/ShowResults";
import ViewCards from "./components/ViewCards";

function App() {
  return (
    <ProviderData>
      <div className="App">
        <NavBar />
        <div className="searchResults">
          <SearchBox />
          <ShowResults />
        </div>
        <div className="cardsShow">
          <ViewCards />
        </div>
      </div>
    </ProviderData>
  );
}

export default App;
