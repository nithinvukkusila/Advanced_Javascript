

// execution context is when ever you call a function like test() the brackets 
//creates an execution context and sends that to call stack 
//there is something called global execution context - we run code in javascript, its always going to be part 
// of an execution context means its part of global 

// javascript engine creates two objects one is global, other is this on the global execution  context
// All the above all  is creation phase 
function test() {
   return 'test'
}

function test1() {
    return test()
}

test1() 

// lexical envinorment - it is basically means where the code is written or when the compiler see our code or interpreter sees our code

