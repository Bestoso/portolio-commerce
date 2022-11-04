
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC1yUzxEgg1Z9rqtUdSt05QZQ6jKRZWUBI",
    authDomain: "portfolio-commerce-1.firebaseapp.com",
    projectId: "portfolio-commerce-1",
    storageBucket: "portfolio-commerce-1.appspot.com",
    messagingSenderId: "477693914791",
    appId: "1:477693914791:web:89d548cbae8ecf650ab582",
};

const app = initializeApp(firebaseConfig);

export const fireStoreInit = () => app;