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
    apiKey: "AIzaSyDzER1SmWNZzEoBbpB_2qMeensWghXeqFc",
    authDomain: "wondersell.firebaseapp.com",
    projectId: "wondersell",
    storageBucket: "wondersell.appspot.com",
    messagingSenderId: "909552100362",
    appId: "1:909552100362:web:8c261f76bfbcb3ed0c2bf3",
    measurementId: "G-YY5V6BXH7P"
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
