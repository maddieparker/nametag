console.log('hello world from app.js');

//data types
//numbers
42;
//strings
let answer = '42';
let catName = 'Bubbles';
console.log(`My cat's name is ${catName}. ${catName} is very cute.`);

//arrays (or a list of things)
let colors = ['red', 'orange', 'yellow'];
console.log(colors);
console.log(colors[1]);
//index counting starts at 0

//objects (in Python look up 'dictionary')
let bubbles = {
    name: 'Bubbles',
    age: 1.5,
    type: 'Cat',
};
console.log(bubbles);

function sayHello() {
    console.log('hello world from sayHello function');
}
sayHello();

function cheeseBurger(cheese) {
    console.log('making a cheeseburger');
    console.log(`Cheese Choice: ${cheese}`);
    cheese = "Pepper Jack";
}