function getDataUrl(urlParam) { 
    return new Promise((resolve, reject) => {
      
      fetch(urlParam)
      .then(response => {
      
        if(response.status === 200){
          const data = response.json();
          resolve(data);
        }else{
          var error = new Error("error found ->")
          reject(error);
        }
      })
      // const status = result.json();
  
      // result.then(response => response.json())
      // .then(data => console.log(data))
  
    });
  }
  
  (async function main() {
    var getData = await getDataUrl('https://jsonmock.hackerrank.com/api/countries?page=1');
    console.log(getData);
  })();