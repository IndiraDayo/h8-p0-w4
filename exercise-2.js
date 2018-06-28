function fpb(angka1, angka2) {
  var arr1 = [];
  var arr2 = [];
  var factor1 = [];
  var factor2 = [];
  var sameFactors = [];

  for (var i = 1; i < angka1 + 1; i++) {
    arr1.push(i)
  }
  for (var j = 1; j < angka2 + 1; j++) {
    arr2.push(j)
  }
  for (var k = 0; k < arr1.length; k++) {
    if (angka1 % arr1[k] === 0) {
      factor1.push(arr1[k]);
    }
  }
  for (var m = 0; m < arr2.length; m++) {
    if (angka2 % arr2[m] === 0) {
      factor2.push(arr2[m]);
    }
  }
  for (var n = 0; n < factor1.length; n++) {
    for (var p = 0; p < factor2.length; p++) {
      if (factor1[n] === factor2[p]) {
        sameFactors.push(factor2[p]);
      }
    }
  }

  var largestFactor = sameFactors[0];

  for (var q = 0; q < sameFactors.length; q++) {
    if (largestFactor < sameFactors[q]) {
      largestFactor = sameFactors[q];
    }
  }

  return largestFactor;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
