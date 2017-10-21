
import firebase from "firebase"

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBWROo7CmdImTBe7BpiN3AnYSD-a5KyUyw",
    authDomain: "storm-front.firebaseapp.com",
    databaseURL: "https://storm-front.firebaseio.com",
    projectId: "storm-front",
    storageBucket: "storm-front.appspot.com",
    messagingSenderId: "785476182119"
  };
  firebase.initializeApp(config);

  export default firebase

  export const databse = firebase.database