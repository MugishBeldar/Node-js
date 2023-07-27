const EventEmitter = require("events");
// const emitter = new EventEmitter();

let url = "http://google.com";

class Logger extends EventEmitter{
  log(message) {
    console.log(message);

    // raise an event
    this.emit("msLogged", { id: 1, url: "http://" });
  }
}

// module.exports.log = log;
// module.exports.endPoint = url;

module.exports = Logger;
 