function getDataUrl(url){

  return new Promise((resolve, reject) =>{

    fetch(url)
    .then(response => {

      if(response.status === 200){
        var data = response.json()
        resolve(data)
      }else{
        var err = new Error("Not working -> ")
        reject(err)
      }

    })
    .catch(err => {
      var err = new Error("Not working -> ")
        reject(err)
    })


  })


}


(async function main(){

  var url = 'https://jsonmock.hackerrank.com/api/countries?page=1';

  var getData = await getDataUrl(url);

  console.log(getData);
  
})();