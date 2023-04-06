function multiply(a,b) {
    // console.log(a)
    return a*b
}



let multiplyByTwo = multiply.bind(this, 2)

console.log(multiplyByTwo(5))