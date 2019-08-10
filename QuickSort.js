console.time("sort")
var array = [45, 69, 36, 2, 55, 39, 98, 46, 30, 30]


function quickSort(array) {
  if (array.length === 0) {
    return []
  }

  var left = [];
  var rigth = [];
  var pivot = array[0];

  for (var i = 1; i <array.length; i++) {
    if (pivot < array[i]) {
      rigth.push(array[i])
    } else {
      left.push(array[i])
    }
  }

  return quickSort(left).concat( pivot,quickSort(rigth))
}

console.log(quickSort(array));
console.timeEnd("sort")
