console.time("sort")
var array = [45, 69, 36, 2, 55, 39, 98, 46, 30, 30];

function mergeSort(data) {
  if (data.length <2 ) {
    return data;
  }
  var middleIndex = Math.round(data.length / 2);

  return merge(
    mergeSort(data.slice(0, middleIndex)),
    mergeSort(data.slice(middleIndex))
  )

}

function merge(left, right) {
  var out = [];

  while (left.length && right.length) {
    out.push(left[0] < right[0] ? left.shift() : right.shift())
  }

  while (left.length) {
    out.push(left.shift())
  }
  while ( right.length) {
    out.push( right.shift())
  }

  return out;
}

console.log(mergeSort(array));

console.timeEnd("sort");
