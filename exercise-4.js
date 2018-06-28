function cariModus(arr) {
  var numAndVal = [];
  var index = 0;

  var highestIndex = 0;

  for (i = 0; i < arr.length; i++) {
    var val = 1;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        numAndVal.push([]);
        numAndVal[index].push(arr[i]);
        val = val + 1;
        numAndVal[index].push(val);
        index = index + 1;

      }
    }
  }

  var highest = 0;

  if (numAndVal[0] === undefined) {
    return - 1;
  } else {
    highest = numAndVal[0][1];
    for (j = 0; j < numAndVal.length; j++) {
      if (numAndVal[j][1] === arr.length) {
        return -1;
        break;
      } else if (numAndVal.length === 1) {
        return numAndVal[0][0];
      } else if (highest === numAndVal[j][1]){
        highest = highest;
        highestIndex = highestIndex;
        if (highest < numAndVal[j][1]) {
          highest = numAndVal[j][1];
          highestIndex = j;
        }
      }
    }
  }

  return numAndVal[highestIndex][0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5,])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
