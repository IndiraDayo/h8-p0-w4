function tukarBesarKecil(kalimat) {
  var alphabetSmall = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var alphabetCapital = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var newString = '';

  for (var i = 0; i < kalimat.length; i++) {
    for (var j = 0; j < alphabetCapital.length; j++) {
      if (kalimat[i] === alphabetCapital[j]) {
        newString = newString + alphabetSmall[j];
        break;
      } else if (kalimat[i] === alphabetSmall[j]) {
        newString = newString + alphabetCapital[j];
        break;
      }
    }
    if (kalimat[i] !== alphabetCapital[j] && kalimat[i] !== alphabetSmall[j]) {
        newString = newString + kalimat[i];
      }
  }
  return newString;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
