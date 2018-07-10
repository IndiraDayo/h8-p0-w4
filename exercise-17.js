function totalDigitRekursif(angka) {
  if (angka === 0) {
    return 0;
}

  var newString = angka.toString();

  var depan = newString[0];
  var sisa = newString.substr(1);

  if (newString === '') {
    return 0;
  }
  var total = Number(depan)
  var sisaNum = Number(sisa)
  // console.log(total)
  // console.log(sisaNum)
  return total + totalDigitRekursif(sisaNum);

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
