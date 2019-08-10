console.time("sort")
var array = [45, 69, 36, 2, 55, 39, 98, 46, 30, 30]


// function quickSort(array) {
//   if (array.length === 0) {
//     return []
//   }
//
//   var left = [];
//   var rigth = [];
//   var pivot = array[0];
//
//   for (var i = 1; i <array.length; i++) {
//     if (pivot < array[i]) {
//       rigth.push(array[i])
//     } else {
//       left.push(array[i])
//     }
//   }
//
//   return quickSort(left).concat( pivot,quickSort(rigth))
// }

function quick_Sort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {

    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;

    for (var i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }

    return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  }
}

console.log(quick_Sort(array));
console.timeEnd("sort")
