function addUpTo(n){
    let total = 0;
    for (let i = 0; i <= n; i++){
        total += i;
    }
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
let finalTime = (t2-t1) / 1000;
console.log(`Time elapsed: ` + finalTime + ` seconds.`);
