// event module 
// event is not a functon it is a class 

const EventEmitter = require('events');

// make the object of eventemitter;
const emitter = new EventEmitter();

// Register a listener
emitter.on('messagelogged', () =>  {
    console.log('Listner is called');
})

// raise the event 
emitter.emit('messagelogged')


// the order of register listener and raise remain same 