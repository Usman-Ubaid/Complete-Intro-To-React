import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import SearchParams from "./SearchParams";
import Details from "./Details";

function App() {
  const adoptedPet = useState();
  return (
    <div>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </AdoptedPetContext.Provider>
    </div>
  );
}

export default App;
