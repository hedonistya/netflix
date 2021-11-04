import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {
  seedDatabase
} from "./data";

// данные для подключения к бд
const config = {
  apiKey: "AIzaSyCavQJTQKSCmfQcjZIESt-p0iDUiW8Uero",
  authDomain: "netflix-77b89.firebaseapp.com",
  projectId: "netflix-77b89",
  storageBucket: "netflix-77b89.appspot.com",
  messagingSenderId: "386011632266",
  appId: "1:386011632266:web:8a12b513cd1064c4a75373"
};

// инициализация бд
const firebase = Firebase.initializeApp(config);

// выгрузка данных в бд
// seedDatabase(firebase);

export {
  firebase
};