const { EventEmitter } = require('events');

const MyEvent = new EventEmitter();

// event names
const MY_EVENTS = {
    EVENT1: "EVENT1",
    EVENT2: "EVENT2",
}

// define event listeners
MyEvent.on(MY_EVENTS.EVENT1, () => {
    console.log("EVENT 1 FIRED")
})

MyEvent.on(MY_EVENTS.EVENT2, () => {
    console.log("EVENT 2 FIRED")
})

// fire events
MyEvent.emit(MY_EVENTS.EVENT1);
MyEvent.emit(MY_EVENTS.EVENT2);

