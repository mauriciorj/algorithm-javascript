'use strict';

async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>

    try{

    let response =  await fetch("https://jsonmock.hackerrank.com/api/countries?page=1")
    let data = await response.json();

    var totalPages = data['total_pages'];
    //console.log(totalPages)
    var final = 'Not Found';

    //console.log(data.data[0]['name'])

    for(let i = 1; i < totalPages; i++){
      let response =  await fetch(`https://jsonmock.hackerrank.com/api/countries?page=${i}`)
      let data = await response.json();

      if(response.ok){
        for(let j = 0; j < data.data.length; j++){
           if(data.data[j]['alpha2Code'] === code){
             final = data.data[j]['name']
             return final
             break;
           }
        }
      }
    }
  }catch(err){
    return err
  }
}

var code = "AF"

console.log(getCountryName(code))
