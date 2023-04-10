console.log('Object oriented programming Classes')


// class Elf {
//     constructor(name, weapon) {
//        this.name = name,
//        this.weapon = weapon
//     }
//     attack() {
//         return 'attach with' + this.weapon
//     }
// }



// Extend properties to other class
class Character {
    constructor(name, weapon) {
       this.name = name,
       this.weapon = weapon
    }
    attack() {
        return 'attach with' + this.weapon
    }
}
class Elf extends Character{
     constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
     }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon)
        this.color = color
    }
    makeFort() {
        return 'Strongest fort iin the world'
    }
}

const spiderMane = new Elf("spider man", ' web ', 'building')
console.log(spiderMane)
console.log(spiderMane.attack())

const sherk = new Ogre('shrek', 'club', 'green')

console.log(sherk)


//Private and Public 



// This - 4 ways 

function Person (name, age) {
    this.name = name
    this.age = age
}

const Person1 = new Person('Xavier' , 55)
console.log(Person1.name)

// implicit finding

const person2 = {
    name: 'George',
    age: 43,
    hi() {
        console.log('hi', this.name)
    }
}
console.log(person2.hi())

const person3 = {
    name: 'George bush',
    age: 53,
    hi: function() {
        console.log('hi', this.setTimeout)
    }.bind(window)
}

console.log(person3.hi())

// arrow function 

const person4 = {
    name: 'G nithin',
    age: 53,
    hi: function() {
        const inner = () => {
            console.log('hi', this.name)
        }
        inner()
    }
}

person4.hi()


// exercise 

class Character2 {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'atack with ' + this.weapon
    }
}

class Queen extends Character2 {
    constructor(name, weapon, other) {
        super(name, weapon)
        this.other = other
    }
    attack() {
        return `I am the Victoria of ${this.other}, now bow down to me! `
    }
}

const victoria = new Queen('Victoria', 'army', 'hearts');

console.log(victoria.attack())

//
