// HOF - a function that takes function as argument or returns the function 

const hof = () => () => 5

console.log(hof()())

const hof2 = (fn) => fn(5);

hof((n) => n)

// closure

const  closure = function() {
    let count = 0;
    return function increment() {
        count++
        return count
    }
}

const incrementFn = closure()
console.log(incrementFn())
console.log(incrementFn())

// curring - squence of functions that on called with one argument at a time

// const multiply = (a,b) => a * b;
// multiply(3,4)
// const curriedMultiply = (a) => (b) => a * b
// console.log(curriedMultiply(3)(2))

// partiall application - process of producing a function with smaller number of parameters

// partial applicaation says i want to call the functon once with one argument and call fucntion again with rest arguments 

const multiplyBy = (a,b,c,d) => a*b*c*d;

const multipltBy4 = multiplyBy.bind(null, 5, 4)

console.log(multipltBy4(10,2))