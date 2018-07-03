function sorting(arrNumber) {
  // console.log(arrNumber)
  var temp = 0;

  for (var i = 0; i < arrNumber.length - 1; i++) {
    if (arrNumber[i] < arrNumber[i + 1]) {
      temp = arrNumber[i];
      arrNumber[i] = arrNumber[i + 1];
      arrNumber[i + 1] = temp;
    }
    for (var j = 0; j < arrNumber.length; j++) {
      if (arrNumber[j] < arrNumber[j + 1]) {
        temp= arrNumber[j];
        arrNumber[j] = arrNumber[j + 1];
        arrNumber[j + 1] = temp;
      }
    }
  }
  return arrNumber
}

function getTotal(arrNumber) {
  // console.log(arrNumber)
  var besar = arrNumber[0]
  var jumlah = 0;

  if (arrNumber[0] === undefined) {
    return '""';
  } else {
    for (var k = 0; k < arrNumber.length; k++) {
      if (arrNumber[k] === besar) {
        jumlah = jumlah + 1;
      }
    }

  return 'angka paling besar adalah ' + besar + ' dan jumlah kemunculan sebanyak ' + jumlah + ' kali';
  }

}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

// console.log(sorting([122, 122, 130, 100, 135, 100, 135, 150]))

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
