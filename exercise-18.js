fufunction kaliTerusRekursif(angka) {
  // if (angka <= 0) {
  //   return 0;
  // }
  var newStr = angka.toString();

  var ygDiKali = newStr[0];
  var sisa = newStr.substr(1)

  if (newStr.length === 1) {
    // console.log(angka + 'n')
    return angka;
  } else {
    var total = 1;
    for (var i = 0; i < sisa.length; i++) {
      total = Number(ygDiKali) * Number(sisa[i]);
      ygDiKali = total.toString()
      // console.log(total)
    }
    // console.log(ygDiKali + ' ' + sisa)
    return kaliTerusRekursif(total)
  }
  return sisa
}

// TEST CASES
console.log()
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
