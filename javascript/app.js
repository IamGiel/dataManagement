// $(document).ready(function(){

 console.log("working");
 var config = {
    apiKey: "AIzaSyCBzzyQfD76zgurrzAvqxxySwS6Rv6czjE",
    authDomain: "employeem-23e7e.firebaseapp.com",
    databaseURL: "https://employeem-23e7e.firebaseio.com",
    projectId: "employeem-23e7e",
    storageBucket: "employeem-23e7e.appspot.com",
    messagingSenderId: "382300694090"
  };
  firebase.initializeApp(config);


  // variables
  var database = firebase.database();

  var employeeName = "";
  var role = "";
  var startDate = "";
  var monthlyRate = "";
  

  //onclick
  $("#submit").on("click", function (event){
      event.preventDefault();

      employeeName = $("#employee-name").val().trim();
      role = $("#role").val().trim();
      startDate = $("#start-date").val().trim();
      monthlyRate = $("#monthly-rate").val().trim();

      console.log(employeeName);


      database.ref().push({
            employeeName:employeeName,
            role:role,
            startDate:startDate,
            monthlyRate:monthlyRate
      })
  })

  //pull
  database.ref().limitToLast(1).on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val());
      
      $("#employee").append(childSnapshot.val().employeeName);
  })










