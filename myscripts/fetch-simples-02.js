// SIMPLE PROMISE

async function simpleFetch (urlParam){

    let url = urlParam;
  
      const response = await fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  
  }
  
  simpleFetch('https://jsonmock.hackerrank.com/api/countries?page=1');