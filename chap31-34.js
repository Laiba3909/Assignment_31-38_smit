document.write(`<center><h1 style = "color: #016764; font-size: 60px; text-decoration: underline #016764"; > Assignment: 26-30 </h1></center>`)
// 1. Write a program that displays current date and time in
// your browser.

var currentDate = new Date();
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q1: </h1>`)
document.write(`<h2 style = "color: brown; margin: 26px;">Current Date and Time: ${currentDate}</h2>`);
 
// 2. Write a program that alerts the current month in words.
// For example December.



var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonthInWords = new Date().getMonth();
alert("Current Month: " + month[currentMonthInWords])
 

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun

 var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 var inWords = new Date().getDay();
var shortDay = days[inWords].slice(0, 3);
alert("Today is: " + shortDay);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var inWord = new Date().getDay();
var inArray = daysName[inWord]
if(inArray == "Saturday" && "Sunday"){
    alert("it's Fun day")
}else{
    alert("working day")
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var date = new Date()
var firstFifteen = date.getDate()

    if(firstFifteen < 16){
        alert(" “First fifteen days of the month”")
    } else {
        alert("“Last days of the month”")
    }
    

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.//  


var currentDate = new Date();
var millisecondsSince1970 = currentDate.getTime();
var minutesSince1970 = Math.floor(millisecondsSince1970 / 60000);


document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q6: </h1>`)
document.write(`<h2 style = "color: brown; margin: 26px;">Current Date and Time: ${currentDate}</h2>`);
document.write(`<h2 style = "color: blue; margin: 26px;">Elapsed Milliseconds since January 1, 1970:  ${millisecondsSince1970}</h2>`);
document.write(`<h2 style = "color: orange; margin: 26px;">Elapsed Minutes since January 1, 1970: ${minutesSince1970}</h2>`);


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var cur = new Date()
var dateHours = cur.getHours()
if (dateHours < 12){
    alert("Its am")
} else {
    alert("Its pm")
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var laterDate = new Date(2020, 11, 31); 
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q8: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;">Later Date: ${laterDate}</h2>`);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var ramdanStart = new Date(2015, 5, 18)
var curr = new Date()
var minusBoth = curr - ramdanStart
var daysPassSinceRamdan = Math.floor(minusBoth / (1000 * 60 * 60 * 24))
alert("Number of days passed since 1st Ramadan: " + daysPassSinceRamdan);


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var startingDate = new Date(2015, 0, 1)
var referenceDate = new Date(2015, 11, 5)

var minus = referenceDate - startingDate
var passedSeconds = Math.floor(minus /(1000))
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q10: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;">On Reference Date: ${referenceDate} , ${passedSeconds} seconds had passed since beginning of 2015.</h2>`);

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

 
var curreeentDatee = new Date('Sat Dec 05 2015 23:08:16 GMT+0500 (PKT)');
var oneHourAgo = new Date(curreeentDatee);
oneHourAgo.setHours(curreeentDatee.getHours() - 1);
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q11: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;">Current Date: ${curreeentDatee}</h2>`);
 document.write(`<h2 style = "color: brown; margin: 26px;">1 hour ago, it was ${oneHourAgo}</h2>`);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?


var currentDatess = new Date(2015, 11, 5);
var pastHundredYearsBack = new Date(currentDatess);
pastHundredYearsBack.setFullYear(currentDatess.getFullYear() - 100);
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q12: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;">Current Date: ${currentDatess}</h2>`);
 document.write(`<h2 style = "color: brown; margin: 26px;">100 years back, It was ${pastHundredYearsBack}</h2>`);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var userOutput = prompt("Enter your age")
var cDate = new Date()
var year = cDate.getFullYear()
var userBirthYear =  year - userOutput;
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q13: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;">Your age is: ${userOutput}</h2>`)
 document.write(`<h2 style = "color: brown; margin: 26px;">Your birth year is: ${userBirthYear}</h2>`);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month

// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var customerName = prompt("Enter your name which is available on k-Electric bill:")
var currentMonth = prompt("Enter Current Bill Month");
var NumberOfUnits = Number(prompt("Enter month number of unit of bill:"));
var chargesPerUnit = 16;
var latePaymentSurcharge  = 350;
var netAmountPayable = NumberOfUnits * chargesPerUnit;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q14: </h1>`)
document.write(`<h1  style = "color: red;  font-size: 60px; margin: 26px;  "> K-Electric Bill </h1>`)
document.write(`<h2  style = "color: blue; margin: 26px;">Customer Name: ${customerName}</h2>`)
document.write(`<h2  style = "color: brown; margin: 26px;">Month: ${currentMonth}</h2>`)
 document.write(`<h2  style = "color: blue; margin: 26px;">Number of Units: ${NumberOfUnits}</h2>`)
 document.write(`<h2  style = "color: brown; margin: 26px;">Charges per Unit:${chargesPerUnit}</h2>`)
document.write( `<h2  style = "color: blue; margin: 26px;">Net Amount Payable (within Due Date): ${netAmountPayable}</h2>`)
 document.write(`<h2   style = "color: brown; margin: 26px;">Late Payment Surcharge: ${latePaymentSurcharge}</h2>`)
document.write(`<h2  style = "color: brown; margin: 26px;">Gross Amount Payable (after Due Date): ${grossAmountPayable}</h2>`)



 
 
