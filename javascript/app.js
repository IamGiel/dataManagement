
// var newData = [
// 	{ //<tr>
// 		trainName:"Joan",//<td>
// 		destination:"Off Arc",//<td>
// 		frequency
// 		firstTime:0,//<td>
// 		frequency:0,//<td>
// 	},
// 	{ //<tr>
// 		trainName:"King",//<td>
// 		destination:"Arthur",//<td>
// 		firstTime:1,//<td>
// 		frequency:1,//<td>
// 	}
// ]
// for (var i = 0; i < newData.length; i++) {
// 	newData[i];
// 	console.log(newData[i]);
// }
// console.log(newData[0].trainName);     
// console.log(newData[0].destination);     
// console.log(newData[0].firstTime);     
// console.log(newData[0].frequency);     
// console.log(newData[1].name);     
// Capture Button Click
$("#submit").on("click", function(event) {
  event.preventDefault();

      // Capture User Inputs and store them into variables
      var trainName = $("#train-name").val().trim();
      var destination = $("#destination").val().trim();
      var firstTrainTime = $("#first-train-time").val().trim();
      var frequency = $("#frequency").val().trim();

      // Console log each of the user inputs to confirm we are receiving them correctly
      console.log(trainName);
      console.log(destination);
      console.log(firstTrainTime);
      console.log(frequency);

      //loop through the object data and assign each to td's

      //dynamically append new <tr> that contains 5 <td>
      	var newTR = $("<tr>");

      	newTR.text(trainName);
      	$('.table > tbody:last').append(newTR); 

      // Clear absolutely everything stored in localStorage using localStorage.clear()
      localStorage.clear();

      // Store the username into localStorage using "localStorage.setItem"
      localStorage.setItem("train-name", trainName);
      localStorage.setItem("destination", destination);
      localStorage.setItem("first-train-time", firstTrainTime);
      localStorage.setItem("frequency", frequency);



      $("#train-name").text(localStorage.getItem("train-name"));
      $("#destination").text(localStorage.getItem("destination"));
      $("#first-train-time").text(localStorage.getItem("first-train-time"));
      $("#frequency").text(localStorage.getItem("frequency"));
});

	$("#train-name").text(localStorage.getItem("train-name"));
	$("#destination").text(localStorage.getItem("destination"));
	$("#first-train-time").text(localStorage.getItem("first-train-time"));
	$("#frequency").text(localStorage.getItem("frequency"));
	