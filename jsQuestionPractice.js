// WS Cube Tech channel

//Class-5

//swap of two number using temporary variable & Without temporary variable

//using temp variable
// let a = prompt("please enter the a value");
// let b = prompt("pleas enter the the b value");
// console.log(`Before Swapping the value of a is: ${a}, the value of b is: ${b}`);

// var temp;
// temp = a;
// a = b;
// b = temp;
// console.log(`After Swapping the value of a is: ${a}, the value of b is: ${b}`);

//without using temp value
// let c = prompt("please enter the a value");
// let d = prompt("please enter the b value");
// console.log(`the value of c is: ${c}, the value of d is: ${d}`);
// c =  parseInt(c) + parseInt(d);

// d = c - d;
// c = c - d;
// console.log(`After swapping the value of c is: ${c}, the value of d is: ${d}`);


//Class-6
//convert kilometers to miles using js function
//iska button or input ye sabhi chije html me likha hua hai
function convertIntoMiles() {
    var kms = document.getElementById("dataForKms").value;//yaha pe dot.value isliye likhe hai kyuki hume data id wale element ko pakad ke uspe input hone wale value ko lena hai isliye .value lagaye hai
    const factor = 0.621371;
    var miles = kms * factor;
    document.getElementById('resultOfMiles').innerText = `= ${miles} Miles`;
}

//Class-7
//convert celsius to fahrenheit using js function
function convertIntoFahrenheit() {
    var c = document.getElementById("dataForC").value;
    var F = (c * 1.8) + 32;//ye formula hai 
    document.getElementById('resultOfFahrenheit').innerText = `${c}°C=${F} Fahrenheit`;
}


//class-8
//To check if a number is positive, negative, or Zero using function
function check() {
    var value = document.getElementById('data').value;
    // var result = Math.sign('prem');  //Math.sign ye batata hai ki koi number positive hai ya negative ya zero in form of 1, -1, 0.


    //without using Math.sign function
    if(value > 0) {
        result = `${value} is positive Number`;
    }
    else if(value < 0) {
        result = `${value} is negative number`;
    }
    else {
        result = `it is zero`;
    }
    document.getElementById('result').innerText = result;
}

//class - 9
//Generate a random Number using Math.random() function.

//without math.floor
var x = Math.random();
console.log("before calculation", x);
x = x * (100 - 1) + 1; //ye formula 1 se 100 ke bich ke number ko generate krega.
console.log("After Calculation", x);

//with Math.floor.
console.log("Floor Calculation",Math.floor(x));

//for otp generation
var y = Math.random();
console.log("Before Calculation", y);
y = y * 10000;
console.log("After Calculation", y);
console.log("Floor Calculation", Math.floor(y));



//class - 10
//To check if a number is odd or Even usin (1).if-else and (2).ternary operator
var l = 63;
if(x%2 == 0) {
    console.log(`${l} is an even number`);
}
else {
    console.log(`${l} is an odd number`);
}
//using ternary operator
var m = 6;
var n = m%2 == 0 ? "even" : "odd";
console.log(`${m} is an ${n} number`);


//class - 11
//to check if a number is prime number.
//what is prime number-A prime number is a positive integer that is only divisible by 1 and itself.
var number = prompt("please enter a number");
if(number == 1) {
    console.log(`${number} is neither prime nor composite number`);
}
else if (number < 1) {
    console.log(`${number} is not a prime number`);
}
else {
    for (var i = 2; i < number; i++) {
        if (number%i == 0){
            var res = `${number} is not a prime number`;
            break;
        }
        else{
            var res = `${number} is a prime number`
        }
    }
    console.log(res);
}

