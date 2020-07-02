// SIMPLE PROMISE

async function simpleFetch (){

    let url = 'https://javascript.info/article/promise-chaining/user.json';
  
    try{
      const response = await fetch(url);
  
      const data = await response.json();
  
      console.log(data);
    }catch(err){
      console.log('ERRO -> ' + err)
    }
  
  }
  
  simpleFetch();