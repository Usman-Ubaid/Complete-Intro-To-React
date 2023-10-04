import { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import { Pet } from "./APIResponsesTypes";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

function App() {
  const adoptedPet = useState(null as Pet | null);
  return (
    <div>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Suspense
          fallback={
            <div className="loading-pane">
              <h2 className="loader">🐶</h2>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Suspense>
      </AdoptedPetContext.Provider>
    </div>
  );
}

export default App;
