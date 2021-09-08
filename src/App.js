import React from 'react';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from "firebase";

import { routes } from "./routes";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './fontawesome';

const App = () => {

  const config = {
    apiKey: "AIzaSyCHC7tUj6CbTJzFVrj09DF5Hf0Bmp7u-3A",
    authDomain: "flembee-74e5c.firebaseapp.com",
    projectId: "flembee-74e5c",
    storageBucket: "flembee-74e5c.appspot.com",
    messagingSenderId: "744609832513",
    appId: "1:744609832513:web:e57bf3a29666abe101b0c0",
    measurementId: "G-WHLE93GD2Y"
  }
  
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...config} >
      <Router>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={ () => {
                  return (
                    <route.layout>
                      <route.component />
                    </route.layout>
                  )
                }}
              />
            );
          })}
        </Switch>
      </Router>
    </FirebaseDatabaseProvider>
  );
};

export default App;
