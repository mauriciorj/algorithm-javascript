function uniqueValues(arr){

    let newArr = []

    for(let i = 0; i < arr.length; i++){

        if(!(newArr.includes(arr[i]))){
            newArr.push(arr[i])
        }
    }

    console.log(newArr)
    console.log(newArr.length)

}

uniqueValues([1,1,1,2,3,3,3,4,5,5,5,6,6,7])
