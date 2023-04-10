// pure functions

const user = {
  name: "nithin",
  active: true,
  cart: [],
  purchases: [],
};

function addItems() {
  user.cart.push({
    name: "fridge",
    price: 30800,
  });
}

function addTax() {

}

function buyItem() {
    user.purchases.push(...user.cart)
}

function emptyCart() {
    user.cart = []
}


// no side effects
// same input retunr the same output

// the below function has side effects
const array = [1,2,3]
// function a (arr) {
//   arr.pop()
// }

// a(array)
console.log(array)

// how to write something that as no side effects

function removeLastItem (arr) {
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray
}

console.log(removeLastItem(array))

function multipltBy2 (arr) {
    return arr.map((item) => item *2)
}


console.log(multipltBy2(array))

function sum(num1,num2) {
    return num1 + num2
}
console.log(sum(3,4))

// idempotence

function notGood(num) {
    console.log(num)
  return num
}
//how many times you call this function this retunrs the same output
// even it is interating with the out side world here it is console.log
// this is called idempotance
console.log(notGood(654))

// imperative vs declarative
// imperatibve - what to do ?how to do
// declarative - what to do and what should happen
//imperative -example


// for(let i=0; i< 100; i++) {
//     console.log(i)
// }

//declarative example
// [12,3,4,5,6,7,8].forEach(item => item)


// immutability - not changing the state

const obj = { name: 'nithin' }

function clone(obj) {
    return { ...obj }
}

obj.name = 'nana'













