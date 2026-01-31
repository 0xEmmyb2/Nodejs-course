const EventEmmitter = require('events');
const readline = require('readline');
const r1 = readline.createInterface({input : process.stdin,
    output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);


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