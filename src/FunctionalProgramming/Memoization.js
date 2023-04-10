//caching means -  is like to store values, that we can use later on
// it is just a way to get data faster

function addTo80(n) {
  return n + 80;
}

addTo80(5);
addTo80(5);

function memoizedAddTo80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  }
}

const memo = memoizedAddTo80()

console.log(memo(5));
console.log(memo(5));
console.log(memo(6 ));
console.log(memo(5));
