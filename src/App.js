import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import Main from "./pages/main";

function App() {
  return (
    <Router>
      <Switch> // задание путей с проверкой
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SignInPage} exact/>
        <Route path='/signup' component={SignUpPage} exact/>
        <Route path='/main' component={Main} exact/>
      </Switch>
    </Router>
  );
}

export default App;
