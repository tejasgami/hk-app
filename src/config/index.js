import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyDChYxqti5uqM4Nr4k6sy48N9YPQEHkwqfts",
    authDomain: "hkapp-dc93f.firebaseapp.com",
    databaseURL: "https://hkapp-dc93f.firebaseio.com",
    projectId: "hkapp-dc93f",
    storageBucket: "hkapp-dc93f.appspot.com",
    messagingSenderId: "1981691845384"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const fbAuth = firebaseApp.auth();