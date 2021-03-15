import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDc2SrnZVkb6uEhqDBCipNjBWc1Vh-UDuM",
    authDomain: "derkopf.firebaseapp.com",
    databaseURL: "https://derkopf-default-rtdb.firebaseio.com",
    projectId: "derkopf",
    storageBucket: "derkopf.appspot.com",
    messagingSenderId: "747920796612",
    appId: "1:747920796612:web:ff7e0b0ad66de4d6915291"
  };
  
var fire = firebase.initializeApp(firebaseConfig);

export default fire;