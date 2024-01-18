import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
<<<<<<< HEAD
import "./pages/landing/landing.css";
import "./pages/about/about.css";
=======
import "./pages/landing/hero.css";
import "./pages/landing/about.css";
import "./pages/portfolio/portfolio.css";
import "./pages/resume/resume.css";
>>>>>>> a31294e81b19e6048f38cf764e8f5a0b43d4064c
import "./pages/contact/contact.css";
import "./pages/404/pageNotFound.css";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
