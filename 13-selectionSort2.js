function selectionSort(arr){

  const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for(let i = 0; i < arr.length; i++){
    let lowest = i;

    for(let j = i+1; j < arr.length; j++){
      if(arr[lowest] > arr[j]){
        lowest = j;
      }
      console.log(arr, arr[i], arr[j], arr[lowest]);
    }
    if(i !== lowest) swap(arr, i, lowest);
  }
  console.log(arr);
}

selectionSort([1,22,31,121,2,10,15,66,112])
