// scope means how the varibles can be accessed restricting to block
// functional scope and block scope (around any curly brackets)

// var is used in functional scope it can be accessed only in that function
// but  let and const are block scope that they are accessed within that scope
function test() {
    let name = 'nithin'
    console.log(name)
}

test()


// exercise 

function loop() {
    for(let i =0; i< 5; i++) {
        console.log(i)
    }
    console.log('final te xt' , i)
}

loop()


// global variables - it is recommended not to use global variables more this might leads
// to performance issue - as we have very less memoery in memoery heap and there might also be memory leakage
// if we have miltiple script tags like 

{/* <script>
var test = 2
</script>
<script>
var test2 = 4
</script>
<script>
    var test3 = 5
    </script>
    <script>
     var test = 200
    </script> */}
// the above will result in test == 200