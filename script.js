
// const countdownDate = prompt("Which day should we countdown to? Please us the format of: MM/DD/YYYY");
// console.log(countdownDate);

// Set the end date for the timer
var countdownDate = new Date("July 31, 2020 11:59:59").getTime(); 


// Make the timer function update every second
var myfunc = setInterval(function() {

// Calculate the remaining time in days, hours, minutes, and seconds
let now = new Date().getTime();

let timeLeft = countdownDate - now;

// Calculate the days, hours, minutes, and seconds left
let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
let hours = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60 * 60));
let minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
let seconds = Math.floor(timeLeft % (1000 * 60) / 1000);

// Display the outlet to users
document.getElementById("days").innerHTML = days + "days "
document.getElementById("hours").innerHTML = hours + "hours " 
document.getElementById("mins").innerHTML = minutes + "mins " 
document.getElementById("secs").innerHTML = seconds + "secs "




}, 1000)