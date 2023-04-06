// number
//boolean
//string
//undefined
//null
//Symbol - usually used for object properties

// non-primitve
//Object

console.log(typeof 2);

console.log(typeof "nithin");

console.log(typeof true);

console.log(typeof undefined);

console.log(typeof null);

console.log(typeof Symbol("ddf"));

console.log(typeof {});

console.log(typeof []);

console.log(typeof function () {});

// check if something is an array

console.log(Array.isArray([1, 2, 3]));

// Passby value pass by reference

var a = 5;
var b = a;
a = 0;
console.log(b);

let obj1 = { name: "Yao", password: "secret" };
let obj2 = obj1;

obj2.name = "example";

console.log(obj1, obj2);

var c = [1, 2, 3, 4];
var d = c;

d.push(2342);

console.log(c, d);

// to copy or clone an obj

//remember each obj is passed by reference

let obj = { a: "a", b: "b", c: { deep: "try to copy" } };

//shallow copy - cloning an obj only to one level
let clone = Object.assign({}, obj);
let clone2 = { ...obj };

let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hahaha";
console.log(clone, obj, clone2, superClone);
// deep copy

// compare an obj

var user1 = { name: "nerd", org: "dev" };
var user2 = { name: "nerd", org: "dev" };

// console.log(JSON.stringify(user1) === JSON.stringify(user2))


(function () {
  const number = 100;
  const string = "Jay";
  let obj1 = {
    value: "a",
  };
  let obj2 = {
    value: "b",
  };
  let obj3 = obj2;

  function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    console.log(obj1)
    obj1 = obj2;
    console.log(obj1)
    obj2.value = "c";
  }

  change(number, string, obj1, obj2);

  //Guess the outputs here before you run the code:
  console.log(number);
  console.log(string);
  console.log(obj1.value);
})();

console.log(typeof -0)

// console.log(0 == null)
// false == []  
// false == {}  
// "" == 0      
// "" == []     
// "" == {}     
// 0 == []      
// 0 == {}      
// 0 == null   


//Dynamic Typing vs stati typing
//static types usually prevent bugs helps keep errors from happening
//Dynamic typing allows you to be more flexible and write sonftware
