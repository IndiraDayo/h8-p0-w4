function ubahHuruf(kata) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var newString = '';

  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (kata[i] === 'z') {
        newString = newString + 'a';
        break;
      } else if (kata[i] === alphabet[j]) {
        newString = newString + alphabet[j + 1];
      }
    }
  }
  return newString
}
