document.write(`<center><h1 style = "color: #016764; font-size: 60px; text-decoration: underline #016764"; > Assignment: 26-30 </h1></center>`)
// // 1. Write a function that displays current date & time in your
// // browser.

function dateAndTime() {
    var currentDate = new Date();
    document.getElementById("output").innerHTML = currentDate; 
    document.write(`<h2 style = "color: white; margin: 26px;">Current Date and Time: ${currentDate}</h2>`);
  }




// // 2. Write a function that takes first & last name and then it
// // greets the user using his full name.

function greet(){
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your Last name:");
    var fullName = firstName +" "+ lastName;
    alert(fullName)
}
greet()

// // 3. Write a function that adds two numbers (input by user)
// // and returns the sum of two numbers.
document.write(`<h1 style="color: white; font-size: 50px; margin: 26px;">Q4: </h1>`);
function addNum(){
var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter  second number:"))
var result = num1 + num2;
alert(`Result is: ${result}`)
}

addNum()

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
document.write(`<h2 style="color: gold; font-size: 60px;margin: 26px; ">Q4:</h2>`);
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
      alert("Error: Division by zero");  
      return null;  
  }
  return a / b;
}

function calculator() {
  var num1 = 12;
  var num2 = 22;
  var operator = prompt("Enter your operator: + , - , * , /");
  var result;
  
  switch (operator) {
      case "+":
          result = add(num1, num2);
          break;
      case "-":
          result = sub(num1, num2);
          break;
      case "*":
          result = multiply(num1, num2);
          break;
      case "/":
          result = division(num1, num2);
          break;
      default:
          alert("Invalid Operator");
          return; 
  }

  if (result !== null) {  
    document.write(`<h2 style="color: brown; margin: 26px; margin-top: 200px;">result of calculator: ${result}</h2>`);
  }
}

calculator();






// // 5. Write a function that squares its argument.

function square(){
    var prom = parseFloat(prompt("Enter a number:"))
    var arg =  prom * prom
    alert(arg)
    
}

square()

// // 6. Write a function that computes factorial of a number.

function factor() {
    var prompt2 = parseFloat(prompt("Enter a Number:"))
    var resul = 1;
    for (let i = 2; i <= prompt2; i++) {
      resul *= i;
    }
    alert(resul)
  }
  factor()

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q7: </h1>`)
document.write(`<h2 style = "color: brown; margin: 26px;">Counting:</h2>`);
function count(){
    var prompt3 = parseFloat(prompt("Enter start number of counting:"));
    var prompt4 = parseFloat(prompt("Enter end number of counting:"));
    for(var i = prompt3; i <= prompt4; i++){
        document.write(`<h2 style = "color: brown; margin: 26px;">${i}</h2>`);
    }
  
}
count()

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// function | JAVASCRIPT

// Page 2 of 4

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
      return x * x;
    }
  
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
  
    return hypotenuse;
  }
  var base = 3;
  var perpendicular = 4;
  alert(calculateHypotenuse(base, perpendicular)); 
  

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

function calculateArea(width, height) {
    return width * height;
  }
  alert("Calculate Area in value: "+ calculateArea(7, 10));

  let width = 11;
let height = 9;
alert("Calculate Area in variable: "+calculateArea(width, height)); 

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function palindrome(phrase) {
  
    phrase = phrase.toLowerCase();
    let reversed = phrase.split('').reverse().join('');
   return phrase === reversed;
  }
alert(palindrome('madam'));  
  alert(palindrome('laiba'));  
  

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function upperCase(sent){
 return sent.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
alert(upperCase("the quiuck brown fox"))


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function longest(wor) {
    var spil = wor.split(' ');
    var long = '';

    for (var i = 0; i < spil.length; i++) {
      if (spil[i].length > long.length) {
            long= spil[i];
        }
    }
    return long;
}



  var resu = longest('Web Development Tutorial')
  alert("longest word:" +resu)

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of

// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function occurrence(str,letter){
    var num = 0;
    for(var i = 0; i < str.length; i++){
       if(str[i] === letter){
        num++
       }
    }
    return num
}

var result3 = occurrence('JSResourceS.com', 'o')
alert('same character:'+ result3)


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2



function circle(rad) {

    var circum = 2 * Math.PI * rad;
   
    alert("The circumference is " + circum.toFixed(2));
}


function calc(radi) {
  
    let area = Math.PI * radi * radi;
    
    alert("The area is " + area.toFixed(2));
}

 circle(5); 
 calc(9);          

 function dateAndTime() {
  var currentDate = new Date();
  document.getElementById("output").innerHTML = currentDate; 
     document.write(`<h2 style = "color: white; margin: 26px;">Current Date and Time: ${currentDate}</h2>`);
}