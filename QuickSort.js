var array = new Array(1000000).fill(1000).map(i => {
  return Math.round(i * Math.random())
});
console.time("sort")
// [45, 69, 36, 2, 55, 39, 98, 46, 30, 30,12,1,23,2,44,55,7,68,7,87,5,63,5,23,4,23,123,2,312,3,12,335,6,768,76,9879,656,2,433,5,34234,]

// function quick_Sort(origArray) {
//   if (origArray.length <= 1) {
//     return origArray;
//   } else {
//
//     var left = [];
//     var right = [];
//     var newArray = [];
//     var pivot = origArray.pop();
//     var length = origArray.length;
//
//     for (var i = 0; i < length; i++) {
//       if (origArray[i] <= pivot) {
//         left.push(origArray[i]);
//       } else {
//         right.push(origArray[i]);
//       }
//     }
//
//     return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
//   }
// }

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, pivot, left, right){
  var pivotValue = arr[pivot],
    partitionIndex = left;

  for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function quickSort(arr, left, right){
  var len = arr.length,
    pivot,
    partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}



console.log(quickSort(array, 0, array.length -1));
console.timeEnd("sort")
