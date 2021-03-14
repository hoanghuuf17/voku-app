import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOKGXnCN5N15MayTx-uOgWg4pdjud7Zek",
    authDomain: "voku-eda52.firebaseapp.com",
    projectId: "voku-eda52",
    storageBucket: "voku-eda52.appspot.com",
    messagingSenderId: "637775984367",
    appId: "1:637775984367:web:19c6a9cab719daf0e760d1a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { db, auth, provider} //1:28