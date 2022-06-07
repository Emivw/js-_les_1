// one line of code of comments




/* comment*/
/*
int, number; 4
string:
decimal, float, double: 4.5
boolean, bool: true or false
array 
object
//dofferent waoys of creation of variables
let, var, const, use variables name
*/
// number = 0;
// console.log(number);
// let firstName = 'peter';
// let lastName = "henk"; // variable name
// console.log(firstName);
// console.log(lastName);
// var salary = 33000;
// console.log(salary);
// const isMAle = true; //boolean variable
// console.log(isMAle);
// let subject = ['HTML5',
//     'CSS3',
//     'JavaScript',
//     'Jquery'
// ]; // array
// console.log(subject);
// let details = {
//     name: 'Emile',
//     surname: 'Manuel'
// };
// console.log(details);


// const btnDisplay = document.getElementById('btnMadeBy');

// btnDisplay.addEventListener('click', {} => {
//     alert('Hello! My name is EMILE VAN WYK!!');
// })

// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "SKYrim@360",
//     database: "sakila"
// });


// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!")
// });

// function toggleText() {
//     var text = document.getElementById("btn");
//     if (text.style.display === "none") {
//         text.style.display = "block";
//     } else {
//         text.style.display = "none";
//     }
// }

// btnDisplay.addEventListener('click', () => {
//     document.getElementById('content').
//     innerText = 'Hello my name is EMILE VAN WYK!!';
// })

// let numb1 = 7;
// let numb2 = 23;
// console.log(numb1 + numb2);
// console.log(numb1 ** numb2);
// console.log(numb1++);
// console.log(++numb1);
// var one = 1;
// var two = 2;
// var three = 18;
// console.log((three >= 1) && (two >= 2) && (one >= 1));

// var myStr = "\"I am a \"double quoted\" string inside \"double quotes\".";
// console.log(myStr);
// let firstName = 'peter';
// let secondName = 'henk';
// let age = 13;
// let myName = "my name is ";
// let mySname = ",my second name is ";
// let myAge = "and my age"
// console.log("my name is ".concat(
//     firstName, " and my second name is ", secondName, " and my age is ", age));

// // calculate salary
// var salary = '9';
// var rate = '10';
// console.log(salary ** rate);

// function toggleText() {

//     var text = document.getElementById("submit", "reset");
//     console.log(text);
// }

// let age = 18;
// let salary = 5000;
// let bonus = 600;
// // if (age >= 18 && (salary >= 5000)) {
// //     salary += bonus;
// //     console.log('your salary: R'.concat(salary));

// // } else {
// //     console.log('Please try again later');
// // }
// if (age >= 18) {
//     if (salary >= 5000) {
//         salary += bonus;
//         console.log('your salary: R'.concat(salary));
//     } else {
//         console.log('Salary must be greater than 5000');
//     }
// } else {
//     console.log('you need to be at least 18 years old');
// }

// Collection
// let items = ['Banana',
//     'Mango',
//     'Orange',
//     'Laptop',
//     'Mouse',
//     'Keyboard'
// ];
// Linking
// let ul = document.getElementById('items');
// // Load items to an ul
// items.forEach((e) => {
//     ul.innerHTML += `
//     <li class='bgDarkCyan'>${e}</li>
//     `;
//     ul
// });
// items.forEach(
//     display);

// function display(e) {
//     console.log(e);
// }
let bestFriends = ['Ethan',
    'Hadan',
    'Atarah',
    'Tommmy',
    'Barett',
    'malancholy',
    'Cranberry',
    'Samsonite',
    'Alixandrea',
    'Venom'
]

// console.log(bestFriends[4].concat(' ', bestFriends[9]));
let middle = bestFriends[bestFriends.length - 1];

let last = bestFriends[bestFriends.length / 2];
console.log(middle, last);






//console.log('comment') console.log('I \"love\" programming'); //place a slash in the beginning of the double quotes to avoid errors