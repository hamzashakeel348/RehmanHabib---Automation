import firebase from "firebase/compat/app";
import "firebase/compat/database";

var firebaseConfig = {
  apiKey: "AIzaSyCtgXmkWRxdHwd1SVNqz6rjceKxBaS96ZU",
  authDomain: "land-records-86c52.firebaseapp.com",
  projectId: "land-records-86c52",
  storageBucket: "land-records-86c52.appspot.com",
  messagingSenderId: "411854620489",
  appId: "1:411854620489:web:c88e8f4ecc5cb8fdfafc98"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();