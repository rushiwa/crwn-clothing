import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCS0kcKQV4wj9ikwjR96ZWa6RLMao-0n2w",
    authDomain: "crwn-db-ffb34.firebaseapp.com",
    projectId: "crwn-db-ffb34",
    storageBucket: "crwn-db-ffb34.appspot.com",
    messagingSenderId: "446798754511",
    appId: "1:446798754511:web:efb27cc81067855b02fdba",
    measurementId: "G-XMR6R81D5B"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;