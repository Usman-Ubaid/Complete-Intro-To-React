import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

function App() {
  return (
    <div>
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
