function cariMedian(arr) {
  var total = 0;
  var index = 0;

  if (arr.length % 2 !== 0) {
    index = Math.floor(arr.length / 2);
    return arr[index];
  } else {
    var mid = arr.length / 2 - 1;
    total = arr[mid] + arr[mid + 1];
    // console.log(mid)
    return total /2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
