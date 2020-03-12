  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAnXTnCSUHTMAP13PIKc8-dlKyoe0VVo8M",
    authDomain: "denverbootcampproject.firebaseapp.com",
    databaseURL: "https://denverbootcampproject.firebaseio.com",
    projectId: "denverbootcampproject",
    stordateBucket: "denverbootcampproject.appspot.com",
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
var role = "";
var date = "";
var rate = 0;

// Capture Button Click
$("#add-user").on("click", function (event) {
  event.preventDefault();

  // Grabbed values from text-boxes
  name = $("#name-input").val().trim();
  role = $("#Role-input").val().trim();
  date = $("#date-input").val().trim();
  rate = $("#rate-input").val().trim();

  // Code for "Setting values in the database"
  // database.ref().push({
   database.ref().push({
    name: name,
    role: role,
    date: date,
    rate: rate
  });

});

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function (snapshot) {

  // Log everything that's coming out of snapshot
  console.log(snapshot.val());
  console.log(snapshot.val().name);
  console.log(snapshot.val().role);
  console.log(snapshot.val().date);
  console.log(snapshot.val().rate);

  // Change the HTML to reflect
  $("#name-display").text(snapshot.val().name);
  $("#role-display").text(snapshot.val().role);
  $("#date-display").text(snapshot.val().date);
  $("#rate-display").text(snapshot.val().rate);

  // Handle the errors
}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
