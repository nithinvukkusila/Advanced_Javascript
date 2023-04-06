// IIFE

// (function () {

// }());

(function () {})();

// so to avoid data leakage when you are declaring global variables or functions we can use IIFE

{
  /*
   <script>
var test = 2
var script1 = (function{
 function a() {
 return 5
 }
 return {
    a: a
 }
})()
</script>
<script>
var test2 = 4
</script>
<script>
    var test3 = 5
    </script>
    <script>
     var test = 200
     functioon a () {
        console.log('sdfsd')
     }
    </script> 
    */
}

// in the above script code we have added iife to avoid the data leakage or overriddening the data
