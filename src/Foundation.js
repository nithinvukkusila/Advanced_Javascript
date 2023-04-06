 // interpreters and compilers

  // interpreter go line by line and interpret the code and convert it bytecode 

  // compiler takes some part of code underestand that code and convert to low level language that 
  // computer understands

function someCalulation(x,y) {
    return x + y

}

for(let i=0; i< 1000; i++) {
    someCalulation(4,5)
}


//call stack and memory heap 
// call stack - first in last out , that executes the code 
// memoery heap - store data like variables, functions 
//Garbage Collection - Mark and sweep the memomery once done with executing of the functi on

// Things to prevent from memory leaks
 // Dont declare vars glabally - because the are not removed are cleaned anytime
 // dont add event listiners gloabally - because the are not removed 
 // setInterval - clearInterval once it is done

 