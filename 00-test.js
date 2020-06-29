function zeroesToCenter(arr) {

if(arr.length < 3){
  return arr
}

var middle = arr.length / 2

var counterZeros = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      counterZeros += 1
    }
}

if (counterZeros === 0) {
  return arr
}

var initZeros = Math.floor((arr.length - counterZeros)/2)
if(counterZeros === 1){
  finaleros = 1
}else{
var finaleros = Math.floor((middle + (initZeros-1)))
}
console.log(initZeros)
console.log(finaleros)

var newArr = [];
var j = 0;
var k = initZeros;

for(let i = 0; i < arr.length;i++){

  if(arr[i] !== 0){
    newArr[j] = arr[i]
    j += 1
    if(j === (initZeros)){
       j = finaleros + 1
     }
  }else if (arr[i] === 0) {
    newArr[k] = arr[i]
    k += 1
  }

}

return newArr

}

arr = [7,1,2,0]

console.log(zeroesToCenter(arr))
