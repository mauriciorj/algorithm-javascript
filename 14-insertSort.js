function insertSort(arr){

  console.log(arr)

  for(var i = 1; i < arr.length; i++){
    var currentValue = arr[i];

    for( var j = i - 1; j >= 0 && arr[j] > currentValue; j--){
      arr[j+1] = arr[j];
    }

    arr[j+1] = currentValue;
      console.log(arr)
  }
    return(arr);
}

insertSort([7,2,14,5,3,11])
