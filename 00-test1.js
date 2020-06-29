// class HashTable{
//
//   constructor(size=53){
//     this.letterMap = new Array(size);
//   }
//
//   set(value){
//     var valueLetter = value.split('')
//
//     var counter = 1;
//
//     for(var letter of valueLetter){
//       var index = this.hash(letter)
//       if(!this.letterMap[index]){
//         this.letterMap[index] = []
//         this.letterMap[index].push([letter, index, counter])
//       }else{
//         counter = (this.letterMap[index][0][2]) + 1
//         //console.log(this.letterMap[index][0][2])
//         this.letterMap[index][0] = [letter, index, counter]
//       }
//     }
//
//     //console.log(this.letterMap)
//   }
//
//   hash(letter){
//     var PRIME = 31
//     var finalValue = 0;
//     var value = letter.charCodeAt(0)
//     finalValue = (value * PRIME) % this.letterMap.length
//     return finalValue;
//   }
//
//   get(value){
//     var valueLetter = value.split('')
//     var check = ''
//
//     for(var letter of valueLetter){
//       var index = this.hash(letter)
//       if(this.letterMap[index] && this.letterMap[index][0][2] !== 0){
//         let updateCounter = (this.letterMap[index][0][2]) - 1
//         this.letterMap[index][0] = [letter, index, updateCounter]
//         check = "YES"
//       }else{
//         check = "NO"
//         break
//       }
//
//     }
//     console.log(check)
//     //console.log(this.letterMap)
//   }
//
//
// }
//
// var t1 = performance.now()
// var test = new HashTable();
// test.set("teeest de string")
// test.get("teeet e srin")
// var t2 = performance.now()
// var final = (t2 - t1) * 1000
// console.log(final)

function hashtable(magazine, ransom){

  var magazineLetters = magazine.split('')
  var ransomLetters = ransom.split('')

  var hashTable = {}

  for(magazineLetters of magazine){
    hashTable[magazineLetters] = (hashTable[magazineLetters] || 0) + 1
  }

  //console.log(hashTable)

  var finalResult = ''

  for(ransomLetters of ransom){
    if(hashTable[ransomLetters] && hashTable[ransomLetters] !== 0){
      hashTable[ransomLetters] = hashTable[ransomLetters] - 1
      finalResult = 'YES'
    }else{
      finalResult = 'NO'
      break;
    }
  }

  console.log(finalResult)

}


var magazine = "give me one grand today night"
var ransom = "give Zone grand today"
hashtable(magazine, ransom)
