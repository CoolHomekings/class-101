
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDGI5v4RfDBHAq56zD_-9WFF_hu4xZ9YSo",
    authDomain: "kwitter-9da64.firebaseapp.com",
    databaseURL: "https://kwitter-9da64-default-rtdb.firebaseio.com",
    projectId: "kwitter-9da64",
    storageBucket: "kwitter-9da64.appspot.com",
    messagingSenderId: "1007626506736",
    appId: "1:1007626506736:web:872372ebcbcceef7478d35",
    measurementId: "G-S3CW1SDHPD"
  };

  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    var user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
  }