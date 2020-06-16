//Check if a second string is an anaram of the first one

function validAnagram(str1, str2){

  if(str1.length !== str2.length){
      return false
  }

  let freqStr1 = {}
  let freqStr2 = {}

  for(let val of str1){
      freqStr1[val] = (freqStr1[val] || 0) + 1
  }

  for(let val of str2){
      freqStr2[val] = (freqStr2[val] || 0) + 1
  }

  for(let key in freqStr2){

      if(!(key in freqStr1)){
          return false
      }
      if((freqStr1[key] !== freqStr2[key])){
          return false
      }

  }

  return true

}

console.log(validAnagram('anagram', 'nagaram'));
