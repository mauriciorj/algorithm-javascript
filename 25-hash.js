function checkMagazine(magazine, note) {

  let keyMap = new Array();

  let magazineWords = magazine.split(' ');
  let noteWords = note.split(' ');

  if(magazineWords.length < noteWords.length){
    console.log(false)
  }else{

    let index = 0;
    for(let word of noteWords){
      let value = hash(word);
      set(word, value, index);
      index =+ 1;
    }

    function set(word, value, index){
      keyMap[index] = []
      keyMap[index].push(word, value)
    }

    function hash(word){
      let index = 0;
      for(let letter of word){
        index += letter.charCodeAt(0);
      }
      return index;
    }

    for(let word of magazineWords){
      let value = hash(word);
      get(value);
    }

    function get(value){
      if(keyMap[value]){
        delete keyMap[value]
      }
    }

    if(!keyMap[value] === 0){
      console.log( 'not null')
    }else{
      console.log( 'null')
    }

    console.log(keyMap)
    //let magazine
  }
}

checkMagazine("Mauricio Joao Mesquita", "Joao Mesquita");
