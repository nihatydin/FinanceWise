import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBI7m3Sma_2zFTHBbyDUGY3rzItGC4CkuU",
  authDomain: "fin-wise-81b29.firebaseapp.com",
  projectId: "fin-wise-81b29",
  storageBucket: "fin-wise-81b29.appspot.com",
  messagingSenderId: "16301580611",
  appId: "1:16301580611:web:d9e6ad7666c71b54364ff6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
