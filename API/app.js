const EventEmmitter = require('events');
const { use } = require('react');
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin,
    output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}?`, (userInput) =>{
    console.log(userInput);
})

const eventEmitter = new EventEmmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
pedro.on('name', ()=>{
    console.log(`My name is ${pedro.name}`);
});

pedro.emit('name');