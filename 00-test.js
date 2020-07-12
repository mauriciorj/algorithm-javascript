function urlFetch(url){
 
  return new Promise((resolve, reject) => {

    fetch(url)
    .then(response => {

      if(response.status === 200){
        
        var result = response.json();
        resolve(result)
      }else{
        var err = new Error("Error, pls ctry again!")
        reject(err)
      }
    })
    .catch(err =>{
      var err = new Error("Error, pls ctry again!")
      reject(err)
    })


  })

} 


(async function fetchData(){

  var url = 'https://jsonmock.hackerrank.com/api/countries?page=1';

  var result = await urlFetch(url);

  console.log(result)

})();