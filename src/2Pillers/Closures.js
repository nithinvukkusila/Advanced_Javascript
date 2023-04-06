// funct(), obj.funct(), funct.apply() or funct.call()

// there is other way of calling a function

// const four = new Function('return 4')

// console.log(four())

// functions are objects // there are special type of obj

// function wooho() {
//     console.log('wooho')
// }

// in background for this function there will be code that will executed when you call with ()
// and name (optional) and also contains properties like call,apply,bind but
// if you create an obj you will not find this call, apply, bind functions
// wooho.yell = 'nithin'

// console.log(wooho())

// Functions are called as first class citizens because
// 1. functions can we assigned to variables
// 2. we can pass function as an arguments to othe function
// 3. we can return function by calling a fucntion

function a(param = 6) {
  return param;
}

console.log(a());

//why high order function
// lets see what are disadvantages of using a function

// ways that we can write a funciton funciton() funciton(a,b) HOC
// if we need to give acces to more people in the organication then we need to add other function
// function loginNithin() {
//     let array = []
//     for(let i=0;i<100000;i++) {
//         array.push(i)
//     }
//     return 'Access Granted to nithin'
// }

// function loginWassem() {
//     let array = []
//     for(let i=0;i<100000;i++) {
//         array.push(i)
//     }
//     return 'Access Granted to waseem'
// }

// console.log(loginNithin())

// instead we can do somthing like

// function giveAccessto(user) {
//     return 'Access Granted to ' + user
// }

// function loginUser(user) {
//     let array = []
//     for(let i=0;i<100000;i++) {
//         array.push(i)
//     }
//     return giveAccessto(user)
// }

// console.log(loginUser('pushpa..raj'))

// HOC - to be more generic

// what if there are more roles to give access to like admin, manager, agent

// function authenticate(person,verify) {
//     let array = []
//     for(let i = 0; i< verify; i++) {
//         array.push(i)
//     }
//     return giveAccessto(person.name) + ' role is ' + person.role
// }

// function personAccess(person, fn) {
//     if(person.role === 'admin') {
//        return authenticate(person,500000)
//     }
//     else {
//        return authenticate(person, 100000)
//     }
//     return
// }

// console.log(personAccess({ role: 'admin', name: 'nithin' }))

const multipleBy = (num) => (b) => b * num;

const multipleByTwo = multipleBy(2);
console.log(multipleByTwo(2));

// closures - clousers are something that outer variables are accessable to current scope

function grandPa() {
  let grandPa = "grandPaa";
  return function () {
    let father = "father";
    return function () {
      let son = "son";
      return grandPa + father + son;
    };
  };
}

// so when we call this function like usually once the function returns a value all the variables are garbage collected
// in the memoery heap but javascript engine remembers the grandpaa because as it is used in the child scope (father) all the varibale are
// saved in memoey heap something called a closure

console.log(grandPa()()());

// other example

const boo = (string) => (name) => (name2) => {
  return `${string} ${name} ${name2}`;
};

console.log(boo("ni")("nithin")("v"));

function callMe() {
  setTimeout(() => {
    console.log(msg);
  }, 2000);
  const msg = "Hey how are you";
}

// because of closures msg is accesable to inner function
// it doesnt matter where we define a variable because but the time settimeout callback is called the callme function
// alreadt returned
console.log(callMe());

//closures are
// function heavyDuty(index) {
//   const bigArray = new Array(70000).fill("Nithin ")
//       return bigArray[index] + 'sfssfsfsfsdfsd'
// }

// Memoery efficient
// function heavyDuty2() {
//     const bigArray = new Array(70000).fill("Nithin ")
//     return function(index) {
//         return bigArray[index] + 'sfssfsfsfsdfsd'
//     }
// }

// const callIndex = heavyDuty(6999)

// Encapsulation

// const makeANuclearButton = () => {
//   let timeWithoutDestruction = 0
//   const passTime = () => timeWithoutDestruction++
//   const totalPeaceTime = () => timeWithoutDestruction
//   const launch = () => {
//     timeWithoutDestruction = -1
//     return 'Bomb Launched'
//   }
//   setInterval(passTime, 1000)
//   return {
//     launch: launch,
//     totalPeaceTime: totalPeaceTime
//   }
// }

// const launchBomb = makeANuclearButton()

// console.log(launchBomb.launch())

// exercise
let view;
function init() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      let view = "sfs";
      called++;
      console.log("View is set");
    }
  };
}

const setView = init();
console.log(setView());

// exercies - 2

const array = [1, 2, 3, 4];

// for (var i = 0; i < array.length; i++) {
//   setTimeout(() => console.log("i am at index " + i), 3000);
// }
// // output is "i am at index 4" printed 4 times

// for (let i = 0; i < array.length; i++) {
//   setTimeout(() => console.log("i am at index " + i), 3000);
// }
for (var i = 0; i < array.length; i++) {
  printI(i)
}


function printI(i) {
  setTimeout(() => console.log("i am at index " + i), 3000);
}


function delay (fn, ms) {
 return function () {
    setTimeout(()=> {
      fn()
    }, ms)
 }
}

// infinite curring 
let timeerId;
function trottle ()  {
   clearTimeout(timeerId)
   setTimeout(()=> {
      console.log('restricted to call in a short period of time')
   }, 1000)
}