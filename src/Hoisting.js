// hoisting is done in creation pphase 
// hoisting means that all the variables and functions on declared to top of their respective scopes 
// during compilation - variables are hoisted partially and function are hoisted as it is declared

console.log('21;;;;;;')
console.log(teddy)
sing()
var teddy = 'bear'
function sing() {
    console.log('ohhh la ')
}

function sing() {
    console.log('this is updated')
}

sing() 


// if the function with same name is declared then the function over ride will happen 