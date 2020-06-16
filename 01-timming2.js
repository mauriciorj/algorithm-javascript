// This is an example how to check the time performance of an algorithm
//Big O
// O(1)

function addUpTo(n){
    return n * (n + 1) / 2;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
let finalTime = (t2-t1) / 1000;
console.log(`Time elapsed: ` + finalTime + ` seconds.`);
