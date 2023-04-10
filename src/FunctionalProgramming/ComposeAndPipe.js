// arity - means the num of arguments that the functin takes


const compose = (f, g) => (data) =>  f(g(data))
// pipe is reverse of compose 

const pipe = (f,g) => (data) => g(f(data))
const multipltBy3 = (n) => n * 3
const takeAbsolute = (n) => Math.abs(n)

const multipltBy2AndAbsolute = compose(takeAbsolute, multipltBy3)

console.log(multipltBy2AndAbsolute(-50))

