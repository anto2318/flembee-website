import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, useLocation } from "react-router-dom";
import * as Redux from 'react-redux';

import { store } from './redux';

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if(pathname === "/contact")
      window.scrollTo(0, document.body.scrollHeight);
    else
      window.scrollTo(0, 0);
  }, [pathname]);

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
