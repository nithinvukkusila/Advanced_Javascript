// // this - is an object that the function is a property of

// // give methods access to their object sing is used in sing again
// // execute same code for multiple objects
// // const obj = {
// //     name: 'Billy',
// //     sing () {
// //         return 'lalala' + this.name
// //     },
// //     singAgain() {
// //        return this.sing() + '|||'
// //     }
// // }

// // console.log(obj.sing())

// function importantPerson() {
//   console.log(this.name + "|");
// }

// const name = "sunny";
// const obj1 = {
//   name: "cassy",
//   importantPerson,
// };

// const obj2 = {
//   name: "Nithin",
//   importantPerson,
// };

// obj1.importantPerson();
// obj2.importantPerson();

// // for the "this" it real matters where the function was called

// const newObj = {
//   name: "billy",
//   sing() {
//     console.log(this);
//     var anotherFunction = () => {
//       console.log("b", this);
//     };
//     anotherFunction();
//   },
// };

// newObj.sing();

// //call apply bind

// const wizard = {
//   name: "Nithin",
//   health: 50,
//   heal(num1, num2) {
//     return (this.health += num1 + num2);
//   },
// };

// const archer = {
//   name: "Robin Hood",
//   health: 30,
// };
// // now we need to call the heal function in archer
// // here we are avoiding the repeating of code

// console.log(archer);
// const healArcher = wizard.heal.bind(archer, 30, 30);
// healArcher();
// console.log(archer);

// // bind retunrs a function

// const array = [1, 2, 3];
// function getMaxNumber(arr) {
//   return Math.max.apply(this, arr);
// }
// console.log(getMaxNumber(array));
// getMaxNumber(array);

// var a = {
//   name: "nithin",
// };

// var b = Object.create(a);
// console.log(a.hasOwnProperty("name"));

//

// var b = {
//   name: "jay b",
//   say() {
//     console.log(this);
//   },
// };

// var c = {
//   name: "jay c",
//   say() {
//     return function () {
//       console.log(this);
//     };
//   },
// };

// var d = {
//     name: 'jay d',
//     say() { 
//         return () => console.log(this)
//      }
// }

// // b.say()
// c.say()()

const character = {
    name: 'Simon',
    getCharacter ()  {
      console.log(this)
      return this.name;
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter.bind(character);
//   const giveMeTheCharacterNOW = character.getCharacter()
//   console.log(giveMeTheCharacterNOW)
  //How Would you fix this?
  console.log('?',giveMeTheCharacterNOW); //this should return 'Simon' 