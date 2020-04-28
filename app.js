const EventEmitter = require("events")
const eventEmitter = new EventEmitter()

eventEmitter.on("tutorial", (num1, num2) => {
    console.log(num1 + num2)
})

eventEmitter.emit("tutorial", 1, 2)

class Person extends EventEmitter {
    constructor(name) {
        super()
        this._name = name
    }

    get name() {
        return this._name
    }
}

let ember = new Person("Ember")
let valaki = new Person("Valaki")
valaki.on("name", () => {
    console.log("my name is " + valaki.name)
})
ember.on("name", () => {
    console.log("my name is " + ember.name)
})

ember.emit("name")
valaki.emit("name")