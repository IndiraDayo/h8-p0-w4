function hitungHuruf(kata) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var kataArr = kata.split(' ');
  var pengulanganArr = [];
  var highestNum = 0;


  for (var i = 0; i < kataArr.length; i++) {
    pengulanganArr.push([]);
    var tempArr = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    for (var j = 0; j < kataArr[i].length; j++) {
      for (var k = 0; k < alphabet.length; k++) {
        if (kataArr[i][j] === alphabet[k]) {
          tempArr[k].push('0');
        }
      }
    }
    // console.log(tempArr);
    for (var m = 0; m < tempArr.length; m++) {
      if (tempArr[m][0] !== undefined) {
        if (tempArr[m].length > 1) {
          pengulanganArr[i].push([alphabet[m],tempArr[m].length]);
        }
      }
    }
  }
  console.log(pengulanganArr)
  console.log(kataArr)
  var str = '';
  for (var n = 0; n < pengulanganArr.length; n++) {
    if (pengulanganArr[n] ==! undefined) {

    } else {
      if (pengulanganArr[n].length > str.length) {
        str = kataArr[n]
      } else {
        str = str
      }
    }

    // for (var p = 1; p < pengulanganArr.length - 1; p++) {
    //   if (pengulanganArr[n].length === pengulanganArr[p].length) {
    //     str = kataArr[n];
    //     // for (var q = 0; q < pengulanganArr[n][p].length; q++) {
    //     //   if (highestNum < pengulanganArr[]) {}
    //     // }
    //   // } else if (){
    //   } else if (pengulanganArr[n].length < pengulanganArr[p].length) {
    //     str = kataArr[p];

    //   }
    // }
  }
  // console.log(pengulanganArr)
  return str;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
