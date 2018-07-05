function changeVocals (str) {
  let vowelsArr = ['A','I','U','E','O','a','i','u','e','o'];
  let vowChangeArr = ['B','J','V','F','P','b','j','v','f','p'];
  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < 19; j++) {
      if (strArr[i] === vowelsArr[j]) {
        // console.log(vowelsChangeArr[j])
        // console.log(vowelsChangeArr[j+1])
        strArr[i] = vowChangeArr[j];
      }
    }
  }
  return strArr
}

function reverseWord (str) {
  let newString = ''
  for (let i = str.length - 1 ; i >= 0; i--) {
    newString = newString + str[i];
  }
  return newString
}

function setLowerUpperCase (str) {
  var LowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var UpperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  let strArr = str.split('')

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0 ; j < LowerCaseArr.length; j++) {
      if (strArr[i] === LowerCaseArr[j]) {
        strArr[i] = UpperCaseArr[j]
      } else if (strArr[i] === UpperCaseArr[j]) {
        strArr[i] = LowerCaseArr[j];
      }
    }
  }
  return strArr
}

function removeSpaces (str) {
  let newString = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {

    } else {
      newString = newString + str[i];
    }
  }
  return newString;
}

function passwordGenerator (name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
    var acak = changeVocals(name);
    var dibalik = reverseWord(acak);
    var ubahBesaran = setLowerUpperCase(dibalik);
    var hapusSpace = removeSpaces(ubahBesaran);
    return hapusSpace;
  }

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
