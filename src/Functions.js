//function expression
var canada = () => {
  console.log("cold");
};

//function declaration

function india() {
  console.log("warmm");
}

//function Invocation/call/Execution

canada();
india();

// when ever we call a function its own execution context is created with "this, arguments".

// its not a good praactice to use arguments directly, because arguments are not exactly array, we cant use array methods
// use spread operators
function marry(person1, person2) {
  console.log("arguments", arguments);

  console.log(Array.from(arguments));
  return `${person1} is now married to ${person2}`;
}

function marry2(...args) {
  console.log(args);
}

marry("twitter", "elon musk");

// variable environment each execution context has its own VE - is maintained in its own execution context call stack or memory,
// once the execution is done it cleans up the memory for all the variables anda function declared inside of it

function two() {
  var isValid; // this isvalid is kept in its variable environment or local environment
}

function one() {
  var isValid = true; // this isvalid is kept in its variable environment or local environment
  two(); // new exection context
}

var isValid = false;

one(); // created a new execution context

//Scope chain

// All the functions have a global lexical envirnoment (lexical means where the function is defined)
// that means they are written in the global space

// initially a js engine checks if the variable is availabe in the current scope if not it will move up one scope
//check if it is present this is called scope chain

function sayMyName() {
  var a = "a";
  return function findName() {
    var b = "b";
    console.log(a) 
    return function printName() {
      var c = "c";
      console.log(a,b)
      return "Nithin Vukkusila";
    };
  };
}

console.log(sayMyName()()())


// js is weird here it checks is height declared in the inner scope if not then it will check in the global scope 
// since it is not there in the global scope it declares the variable globally
// we use 'use strict' to avoid this
function weird() {
  height = 50;
  return height
}

console.log(weird())

var heyhey = function doodle() {
  
  return 'hey hey'
}

console.log(heyhey())
console.log(doodle())



