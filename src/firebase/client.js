import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBnNUlZaFc7dIDdsfIaQzXYpa1rpZj7CEQ",
    authDomain: "proyectoani-289b1.firebaseapp.com",
    projectId: "proyectoani-289b1",
    storageBucket: "proyectoani-289b1.appspot.com",
    messagingSenderId: "935598756955",
    appId: "1:935598756955:web:e176c98f1b2e826078db7e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);