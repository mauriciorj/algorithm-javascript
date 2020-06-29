// function test(arg){
//
//   let arr = [];
//
//   for(let i = arg.length - 1; i >= 0 ; i--){
//     arr.push(arg[i])
//   }
//
//   console.log(arr)
//
// }
//
// var t1 = performance.now();
// test([0,1,2,3,4,5,6])
// var t2 = performance.now();
// let finalTime = (t2 - t1) * 1000
// console.log("Time: " + finalTime)


// function test(arg){
//
//   let arr = [];
//
//   let i = arg.length - 1;
//
//   for(let key of arg){
//     arr[i] = key;
//     i = i -1;
//   }
// console.log(arr)
// }
//
// test([1,2,3,4,5,6])


// function letter(word){
//
//   for(key of word){
//     console.log(key)
//   }
//
// }
//
// letter("test")


// function letter(word1, word2){
//
//   let counterLetter1 = {}
//   let counterLetter2 = {}
//
//   for(let val of word1){
//     if (!counterLetter1[val]){
//       counterLetter1[val] = 1;
//     }else{
//       counterLetter1[val] = counterLetter1[val] + 1
//     }
//   }
//
//   for(let val of word2){
//     if (!counterLetter2[val]){
//       counterLetter2[val] = 1;
//     }else{
//       counterLetter2[val] = counterLetter2[val] + 1
//     }
//   }
//
//   //console.log(counterLetter1);
//   //console.log(counterLetter2);
//
//   for(let key in counterLetter2){
//     if(!(key in counterLetter1)){
//       return false
//     }else if(counterLetter2[key] !== counterLetter1[key]) {
//       return false
//     }
//     return true
//   }
//
// }
//
// word1 = "eolv"
// word2 = "love"
//
// console.log(letter(word1, word2))


// function objTest(obj){
//
//   for(let key of obj){
//     console.log(obj[key - 1])
//   }
//
// }
//
// var todd = [1,2,3,4]
//
// objTest(todd)


// function uniqueValues(arr){
//
//   let newArr = [];
//
//   for(let val in arr){
//
//     //console.log(arr[val])
//
//     if(!newArr.includes(arr[val])){
//         newArr.push(arr[val])
//     }
//   }
//
//   console.log(newArr)
//
// }
//
// numSeries = [1,1,1,1,2,3,3,3,4,5,6,7,7]
//
// uniqueValues(numSeries)

// const test = uniqueValues.includes(3)
// console.log(test)



// function recur(num){
//
//   if(num === 1) return 1;
//
//   return num * recur(num - 1)
// }
//
// console.log(recur(4))


// const employee = {
//   firstName: "Marko",
//   lastName: "Polo",
//   position: "Software Developer",
//   yearHired: 2017
// };
//
// console.log(employee.position)
//
// let oldEmployee = {...employee}
// oldEmployee.firstName = "Mauricio"
//
// console.log(oldEmployee)



// function bubbleSort(arr){
//   var noSwaps;
//
//   for(var i = arr.length; i > 0; i--){
//     noSwaps = true;
//
//     for(var j = 0; j < i - 1; j++){
//       console.log(arr, arr[j], arr[j+1]);
//       if(arr[j] > arr[j+1]){
//         var temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//         noSwaps = false;
//       }
//     }
//     if(noSwaps) break;
//   }
//   return arr;
// }
//
// var t1 = performance.now()
// bubbleSort([1,22,31,121,2,10,15,66,112])
// var t2 = performance.now()
// var final1 = (t2 - t1) * 1000
// console.log(final1)
//
//
// function selectionSort(arr){
//
//   for(var i = 0; i < arr.length; i++){
//     var lowest = i;
//     for(var j = i+1; j < arr.length; j++){
//       if(arr[j] < arr[lowest]){
//         lowest = j;
//       }
//     }
//     if(i !== lowest){
//       console.log(arr, arr[i], arr[lowest]);
//       var temp = arr[i];
//       arr[i] = arr[lowest];
//       arr[lowest] = temp;
//     }
//   }
//
//    console.log(arr);
// }
//
// var t3 = performance.now()
// selectionSort([1,22,31,121,2,10,15,66,112])
// var t4 = performance.now()
// var final2 = (t4 - t3) * 1000
// console.log(final2)
//
//
//
// function selectionSort(arr){
//
//   const swap = (arr, idx1, idx2) =>
//   ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
//
//   for(let i = 0; i < arr.length; i++){
//     let lowest = i;
//
//     for(let j = i+1; j < arr.length; j++){
//       if(arr[lowest] > arr[j]){
//         lowest = j;
//       }
//       console.log(arr, arr[i], arr[j], arr[lowest]);
//     }
//     if(i !== lowest) swap(arr, i, lowest);
//   }
//   console.log(arr);
// }
//
// var t5 = performance.now()
// selectionSort([1,22,31,121,2,10,15,66,112])
// var t6 = performance.now()
// var final3 = (t6 - t5) * 1000
// console.log(final3)


// function hashWords(magazine, letter){
//
//   var magazineWords = magazine.split(' ');
//   var letterWords = letter.split(' ');
//
//   var magazineHash = new Array();
//
//   for(var i = 0; i < magazineWords.length; i++){
//     var hashWordCalc = hash(magazineWords[i]);
//     magazineHash.push(hashWordCalc, magazineWords[i]);
//   }
//
//   function hash(words){
//     var wordsSliced = words.slice('');
//     var sumValueWord = 0;
//
//     for(var i = 0; i < wordsSliced.length; i++){
//       sumValueWord += wordsSliced[i].charCodeAt(0)
//     }
//     return sumValueWord;
//   }
//
//   for(var j = 0; j < letterWords.length; j++){
//
//     if(!magazineHash.includes(letterWords[j])){
//       return false
//     }
//   }
//
//   return true
//
//   //console.log(magazineHash)
//
// }
//
//
// var magazine = "give me one grand today night"
// var letter = "give oned grand today"
//
// console.log(hashWords(magazine, letter))


// function hashWords(magazine, letter){
//
//   var letterWords = letter.split(' ');
//
//   for(var value of letterWords){
//     if(!magazine.includes(value)){
//         return false
//     }
//   }
//
//   return true
//
// }
//
// var magazine = "give me one grand today night"
// var letter = "give one grand today"
//
// console.log(hashWords(magazine, letter))
