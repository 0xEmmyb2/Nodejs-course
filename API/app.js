const EventEmmitter = require('events');

const eventEmitter = new EventEmmitter();

eventEmitter.on('tutorial', () => {
    console.log("Tutorial event has occured.")
});