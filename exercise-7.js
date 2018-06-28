function digitPerkalianMinimum(angka) {
  var angkaArr = [];
  var digitArr = [];

  for (var i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      angkaArr.push([i, angka / i]);
    }
  }
  for (var j = 0; j < angkaArr.length; j++) {
    digitArr.push(angkaArr[j][0].toString() + angkaArr[j][1].toString());
  }
  var min = digitArr[0].length;
  for (var k = 0; k < digitArr.length; k++) {
    if (min > digitArr[k].length) {
      min= digitArr[k].length;
    }
  }
  return min;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
