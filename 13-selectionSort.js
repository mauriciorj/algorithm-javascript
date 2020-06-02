function selectionSort(arr){

  for(var i = 0; i < arr.length; i++){
    var lowest = i;
    for(var j = i+1; j < arr.length; j++){
      if(arr[j] < arr[lowest]){
        lowest = j;
      }
    }
    if(i !== lowest){
      console.log(arr, arr[i], arr[lowest]);
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

   console.log(arr);
}

selectionSort([1,22,31,121,2,10,15,66,112])
