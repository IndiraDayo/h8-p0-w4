function urutkanAbjad(str) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var strArr = [];

  var newString = '';

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (str[i] === alphabet[j]){
        strArr.push(j);
      }
    }
  }
  var temp;
  for (var k = 0; k < strArr.length; k++) {
    if (strArr[k] > strArr[k + 1]) {
      temp = strArr[k];
      strArr[k] = strArr[k + 1];
      strArr[k + 1] = temp;
    }
    for (var l = 0; l < strArr.length; l++) {
      if (strArr[l] > strArr[l + 1]) {
        temp = strArr[l];
        strArr[l] = strArr[l + 1];
        strArr[l + 1] = temp;
      }
    }
  }
  for (var m = 0; m < strArr.length; m++) {
    for (var n = 0; n < alphabet.length; n++) {
      if (strArr[m] === n){
        newString = newString + alphabet[n];
      }
    }
  }
  return newString;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
