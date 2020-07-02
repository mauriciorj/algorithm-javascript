// SIMPLE PROMISE

async function simpleFetch (urlParam){

    let url = urlParam;
  
      const response = await fetch(url);
  
      const data = await response.json();
  
      return data.data;
  
  }
  
  simpleFetch('https://jsonmock.hackerrank.com/api/countries?page=1')
  .then(data => console.log(data))
  .catch(err => console.log('ERRO -> ' + err))