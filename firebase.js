import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7tF-uiPAModQNe_Nv6O_QnB2N_aWLZB8",
  authDomain: "facebook-clone-d20ca.firebaseapp.com",
  projectId: "facebook-clone-d20ca",
  storageBucket: "facebook-clone-d20ca.appspot.com",
  messagingSenderId: "1018629282297",
  appId: "1:1018629282297:web:75887e5a4ecb59a5cd4528",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
