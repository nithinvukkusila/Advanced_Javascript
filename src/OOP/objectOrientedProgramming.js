// lets create a program game using only OOP principles

// this elf a character
const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack () {
        return 'attack with' + elf.weapon
    }
}

// to create other chracter we need to just

const elf2 = {
    name: "Orwell",
    weapon: 'box',
    attack () {
        return 'attack with' + elf2.weapon
    }
}


// factory functions - it is a factory that creates functions 
function createElf(name, weapon) {
     return {
        name,
        weapon,
        attack () {
            return 'attack with' + elf2.weapon
        } 
    }
}

const peter = createElf('peter', 'Stones')
console.log(peter.attack())
const sam = createElf('sam', 'chai')
console.log(sam.attack())
//here if we see there is lot of memory comsuming is happening like all the time creating a new object, functions for 
// each character is stored in different different locations.

// one way way we can avoid this is using create fucntion
 
const elfFunctions = {
    attack() {
        return 'Attack with' + this.weapon
    }
}

function createAnElf(name, weapon) {
    let newElf = Object.create(elfFunctions)
    newElf.name = name,
    newElf.weapon = weapon
    return newElf
}

const nithin = createAnElf('nithin', 'ice')
console.log(nithin.attack())

const brother = createAnElf('nishanth', 'fire')
console.log(brother.attack())

// what programmers were doing before the Object.create ability was not tere

function anime(name, weapon) {
     this.name = name,
     this.weapon = weapon
}

console.log(anime())
console.log('prototype', anime.prototype)
const waseem = new anime('waseem', 'sand')
console.log('name is', waseem.name)
const nani = new anime('nani', 'water')

// Normal function prototype is not used basically it is useledd 
// but with constructor funciton is is usfull to add properties using .prototype

anime.prototype.attack = function (){
    return  this.name + " attack with " + this.weapon
}

console.log(nani.attack())


