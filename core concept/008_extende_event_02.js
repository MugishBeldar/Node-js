const EventEmitter = require('events');
// const emitter = new EventEmitter();
const Logger = require('./003_login');
// console.log(Logger)
const logger = new Logger();

// register a listner
logger.on('msgLogged', (arg) => console.log("Listner called",arg)); // e,eventArg

// raise an event 
// emitter.emit('msgLogged', {id: 1, url: 'http://'})

// for custome msg go login module

logger.log("hello");