$(document).ready(function() {
	timeInterval = setInterval(updateClock, 1000);
	$(window).resize();
	document.getElementById("main").style.color = widgetColor;
});

var database = new Firebase('https://happy-af269.firebaseio.com');
var arr = [];
var newInput;

function saveInput() {
	var userInputField = document.getElementById('input');
  	var userInput = userInputField.value;
  	database.push({
  		input: userInput,
	});
};

function clearInput() {
	$('#happy').fadeOut(500);
};

function getNewInput() {
	database.on("value", function(snapshot) {
  		snapshot.forEach(function(childSnapshot){
  			var message = childSnapshot.val();
  			arr.push(message.input);
  		});
		setTimeout(function() {
			timeIntervalTwo = setInterval(function scrollThroughResponses() {
				newInput = arr[Math.floor(Math.random() * (arr.length - 1 + 1))];
				$('#happy').html("<span id='happy-text'><span id='user-input'>" + newInput + "</span>...made someone else happy today.</span>").fadeIn();
				$(window).resize();
			}, 4000);
		}, 500);
	});
};

var timeInterval;

function updateClock() {
	var date = new Date();
	var dayOfWeek = date.getDay();
	var month = date.getMonth();
	var day = date.getDate();
	var timeInMinutes = 1440 - date.getHours() * 60 - date.getMinutes();

	// Set time

	var hours = Math.floor(timeInMinutes / 60);
	var minutes = Math.floor(timeInMinutes % 60);
	var arr = [0];
	var hoursArray = (hours).toString().split('').map(Number);
	var minutesArray = (minutes).toString().split('').map(Number);
	var zeroHours = arr.concat(hoursArray).slice(-2).join('');
	var zeroMinutes = arr.concat(minutesArray).slice(-2).join('');

	$('#hours').html(zeroHours + " hours &amp; ");
	$('#minutes').html(zeroMinutes + " minutes");

	// Set date
	switch (dayOfWeek) {
		case 0:
			dayOfWeek = "Sunday";
			break;
		case 1:
			dayOfWeek = "Monday";
			break;
		case 2:
			dayOfWeek = "Tuesday";
			break;
		case 3:
			dayOfWeek = "Wednesday";
			break;
		case 4:
			dayOfWeek = "Thursday";
			break;
		case 5:
			dayOfWeek = "Friday";
			break;
		case 6:
			dayOfWeek = "Saturday";
			break;
	}

	switch (month) {
		case 0:
			month = "January";
			break;
		case 1:
			month = "February";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "August";
			break;
		case 8:
			month = "September";
			break;
		case 9:
			month = "October";
			break;
		case 10:
			month = "November";
			break;
		case 11:
			month = "December";
			break;
	}

	$('#date').html(dayOfWeek + ", " + month + " " + day);

	//if (date.getHours == 24 and date.minutes == 0) {
	//	clearInterval(timeInterval);
	//};
}

$(window).resize(function() {
	$('#box').css({
		position:'absolute',
		left: ($(window).width() - $('#box').outerWidth())/2,
		top: ($(window).height() - $('#box').outerHeight())/2 - 60
	});

	$('#happy').css({
		position: 'absolute',
		left: ($(window).width() - $('#happy').outerWidth())/2,
	});
});
