
// An object gets access to the properties and methods of another object throught prototype chain
 

// javascript uses something called prototypal inheritance
// the arr[] object gets access to the methods of the obj (inheritance)
// same with functions obj

var arr = [1,2,3] // this arra is created by new Array()
var obj = {
    name: 'nithin'
}

console.log(obj.__proto__)
function a () {

}

console.log(a.__proto__)
// because of prototype chain arr has access to for example toString() method
console.log(arr.toString())
console.log(arr.__proto__.__proto__)

let dragon = {
    name: 'nithin',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if(this.fire) {
            return `I am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'kiki',
    fight() {
        return 1
    }
}

//now you want to copy one method to lizard from dragon
const singLizard = dragon.sing.bind(lizard)
console.log(singLizard())

// what if you want to copy all the properties of dragon to lizard

lizard.__proto__ = dragon

console.log(lizard.fight())
console.log(dragon.isPrototypeOf(lizard))

for(let prop in lizard) {
    if(lizard.hasOwnProperty(prop)) {
        console.log(prop)
    }
}

// why is prototype chain important, where it is usefull - Memory managment

// instead of creating same properties for different objects, here we are just inheriting the property from other 
// obj, it is like just creating the instance of other object

let human = {
    mortal: true

}

let socrates = Object.create(human)
socrates.age = 45

console.log(socrates)
console.log(socrates.mortal)
console.log(human.isPrototypeOf(socrates))
console.log(human.__proto__)


//Every function has prototype 
//last object in the chain is built in object that Object.prototype

// exercise 1
// Date Object => to have new method .lastyear which shows you last year 'YYYY' format.


Date.prototype.lastYear = function () {
    console.log(new Date().getFullYear())
    return this.getFullYear() - 1
}

console.log(
    new Date('1990-10-10').lastYear())


Array.prototype.myMap = function () {
    let result = [];
    for(let i=0; i<this.length; i++) {
        result.push((this[i] + 'dg'))
    }
    return result
}

console.log([1,2,3].myMap())

// exercise - How coulf you be able to create your own bind

const obj = {
    name: 'nhi',
    age: 23
}
function someFuncion () {
    console.log(this.name, this.age)
}

// __proto__ points to prototype of an obj


const some = somfunc.bind(obj)

Function.prototype.bind = function (whoisCalling) {
    const self = this
     return function() {
         return self.apply(whoisCalling, arguments)
     }
}

Function.prototype.bind = function(whoisCalling) {
    const self = this
    return function() {
        return self.apply(whoisCalling, arguments)
    }
}