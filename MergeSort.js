var array = [1,2,32,3,5,67,3,34,222,2];

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

var result = mergeSort(array);
console.log(result);
