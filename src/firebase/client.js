import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD2pCWDUlIZ23fNuR_Gp-5L_jUotGyS_cs",
    authDomain: "santo-c9db8.firebaseapp.com",
    projectId: "santo-c9db8",
    storageBucket: "santo-c9db8.appspot.com",
    messagingSenderId: "774410140654",
    appId: "1:774410140654:web:1bc0b390ce1824aa6e2cff"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);