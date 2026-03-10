// Greeting!
let name = prompt("Hello, what is your name?");
alert("Welcome " + name + ", it's a pleasure to greet you!");

// Numerical input
let numInput1 = prompt("Please enter an integer value:");  // first int
let num1 = Number(numInput1);  // convert it to a number

let numInput2 = prompt("Please enter a second integer value:");  // second int
let num2 = Number(numInput2);  // convert it to a number
let a = alert("Let me show you what I can do for with the numbers "+ num1 +" and "+ num2 +";");


// Do something with it
let squared = num1 + num2;
alert(num1 + "+" + num2 +"="+ squared);

squared = num1 - num2;
alert(num1 + "-" + num2 +"="+ squared);

squared = num1 * num2;
alert(num1 + "*" + num2 +"="+ squared);

squared = num1 / num2;
alert(num1 + "/" + num2 +"="+ squared);

squared = num1 % num2;
alert(num1 + "%" + num2 +"="+ squared);

if (num1 > num2){ 
    alert("The max of "+ num1 +" and "+ num2 +" is "+ num1);
    alert("The min of "+ num1 +" and "+ num2 +" is "+ num2);
}
else{
    alert("The max of "+ num1 +" and "+ num2 +" is "+ num2);
    alert("The min of "+ num1 +" and "+ num2 +" is "+ num1);
}

let dcvalue =prompt("Please enter a value with a decimal part:")

alert("Let me show you what I can do with the number " + dcvalue);

squared = -dcvalue;
alert("The negative of "+ dcvalue + " is " + squared);

squared = Math.sin(dcvalue);
alert("The sine of "+ dcvalue + " radians is "+ squared);

squared = Math.cos(dcvalue);
alert("The cosine of "+ dcvalue + " radians is "+ squared);

squared = Math.pow(dcvalue,10);
alert(dcvalue +" ^ "+ 10 +" = "+ squared );


squared = Math.sqrt(dcvalue);
alert( "Square root of " +dcvalue +" = "+ squared );

squared = Math.round(dcvalue);
alert( "Rounded " +dcvalue +" = "+ squared );
squared = Math.floor(dcvalue);
alert( "Floor of " +dcvalue +" = "+ squared );
squared = Math.ceil(dcvalue);
alert( "Ceiling of " +dcvalue +" = "+ squared );
squared = Math.abs(dcvalue);
alert( "Absolute value of " +dcvalue +" = "+ squared );