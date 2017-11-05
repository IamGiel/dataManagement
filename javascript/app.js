$(document).ready(function(){
     
  var dateToday = moment().format("MM - DD - YYYY");
  $("#dateToday").text(dateToday);
  console.log(dateToday);

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB0SrnI7EU9ftuSGrnwQTzkxcHQLyNnBSA",
    authDomain: "employeedata-1f466.firebaseapp.com",
    databaseURL: "https://employeedata-1f466.firebaseio.com",
    projectId: "employeedata-1f466",
    storageBucket: "",
    messagingSenderId: "614390105974"
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
      role = $("#role-of").val().trim();//has to be a ("#data-format") so ("#role") will not work
      startDate = moment($("#start-date").val().trim(), "MM/DD/YY").format("X");
      monthlyRate = $("#monthly-rate").val().trim();
      
      $("#employee-name").val("");
      $("#role-of").val("");
      $("#start-date").val("");
      $("#monthly-rate").val(""); 

      database.ref().push({
            employeeName:employeeName,
            role:role,
            startDate:startDate,
            monthlyRate:monthlyRate
      })
      $(".table > #tbody").append("<tr><td>" + employeeName + "</td><td>" + role + "</td><td>" + startDate + "</td><td>" + monthlyRate + "</td></tr>"); 
  });
  //pull
  database.ref().orderByChild("startDate").on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val());

      var empRate = childSnapshot.val().monthlyRate;
      var empStart = childSnapshot.val().startDate;
      var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
      var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
      console.log(moment.unix(empStart, "MM"));

      var salaryPaid = empMonths * empRate;

      $(".table > tbody").append("<tr><td>" + childSnapshot.val().employeeName + "</td><td>" + childSnapshot.val().role + "</td><td>" + empStartPretty + "</td><td>" + childSnapshot.val().monthlyRate + "</td><td>" + salaryPaid + "</td></tr>");
      
  })

});








