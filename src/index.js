import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './App';
import {firebase} from "./firebase/firebase.prod";
import {FirebaseContext} from "./firebase/firebase";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <App/>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

