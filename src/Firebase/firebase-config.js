import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP.apiKey,
    authDomain: process.env.REACT_APP.authDomain,
    projectId: process.env.REACT_APP.projectId,
    storageBucket: process.env.REACT_APP.storageBucket,
    messagingSenderId: process.env.REACT_APP.messagingSenderId,
    appId: process.env.REACT_APP.appId,
    measurementId: process.env.REACT_APP.measurementId
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);