import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Main from "./main";

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
