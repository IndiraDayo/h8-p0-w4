function changeMe(arr) {
  var currentTime = new Date();

  if (arr[0] === undefined) {
    return '""';
  } else {
    for (var i = 0; i < arr.length; i++) {
      var arrObj = {
        firstName: '',
        lastName: '',
        gender: '',
        age:[]
      };

      var currentYear = arrObj.age = currentTime.getFullYear();
      arrObj.firstName = arr[i][0];
      arrObj.lastName = arr[i][1];
      arrObj.gender = arr[i][2];
      if (arr[i][3] === undefined || arr[i][3] > currentYear) {
        arrObj.age = 'Invalid Birth Year'
      } else {
        arrObj.age = currentYear - arr[i][3];
      }
      var fullName = arrObj.firstName + ' ' + arrObj.lastName + ':';
      console.log(i+ 1 + '. ' + fullName)
      console.log(arrObj)
    }
  }
  return ''

}

// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]))
 // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
console.log(changeMe([])) // ""
