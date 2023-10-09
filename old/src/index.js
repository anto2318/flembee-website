import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import * as Redux from 'react-redux';

import { store } from './redux';

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";

export default function ScrollToTop() {
  useEffect(() => {
      window.scrollTo(0, 0);
  });

  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Redux.Provider store={store}>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </Redux.Provider>
);

reportWebVitals();
