window.onload() function {

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAnXTnCSUHTMAP13PIKc8-dlKyoe0VVo8M",
    authDomain: "denverbootcampproject.firebaseapp.com",
    databaseURL: "https://denverbootcampproject.firebaseio.com",
    projectId: "denverbootcampproject",
    storageBucket: "denverbootcampproject.appspot.com",
    messagingSenderId: "572799408700",
    appId: "1:572799408700:web:3c116edf0fa8d204350139"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var name = "";
var email = "";
var age = 0;
var comment = "";

// Capture Button Click
$("#add-user").on("click", function (event) {
  event.preventDefault();

  // Grabbed values from text-boxes
  name = $("#name-input").val().trim();
  email = $("#email-input").val().trim();
  age = $("#age-input").val().trim();
  comment = $("#comment-input").val().trim();

  // Code for "Setting values in the database"
  // database.ref().push({
   database.ref().push({
    name: name,
    email: email,
    age: age,
    comment: comment
  });

});

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function (snapshot) {

  // Log everything that's coming out of snapshot
  console.log(snapshot.val());
  console.log(snapshot.val().name);
  console.log(snapshot.val().email);
  console.log(snapshot.val().age);
  console.log(snapshot.val().comment);

  // Change the HTML to reflect
  $("#name-display").text(snapshot.val().name);
  $("#email-display").text(snapshot.val().email);
  $("#age-display").text(snapshot.val().age);
  $("#comment-display").text(snapshot.val().comment);

  // Handle the errors
}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
}
