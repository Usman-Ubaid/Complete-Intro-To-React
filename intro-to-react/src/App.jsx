import Pet from "./Pet";
import "./App.css";
import SearchParams from "./SearchParams";

function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cocktiel" />
      <Pet name="Doink" animal="cat" breed="Mixed" /> */}
      <SearchParams />
    </div>
  );
}

export default App;
