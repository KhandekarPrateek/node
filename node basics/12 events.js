//creates a class from the events module
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//imp methods of this object are
// on- listen for an event
// emit-emit an event

customEmitter.on("myEvent", (name, id) => {
  //can have params in callback too
  console.log(`prateek dada is ${name} with bday on ${id}`);
});
customEmitter.on("myEvent", () => {
  console.log(`can have more  ons `);
});
//we are creating a event here and before that we were already listening to it
//and had a console statemtn ready if that event were to occur
customEmitter.emit("myEvent", "legend", 14);
// name has to be same in both emit and on

//order matters listen then emit
