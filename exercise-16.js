function makanTerusRekursif(waktu) {

//Pakai recursive
  if (waktu <= 0) {
    return 0;
  }

  return 1 + makanTerusRekursif(waktu - 15);

// //Tidak pakai recursive
//   var counter = 0;
//   var found = false;
//   if (waktu === 0) {
//     return 0;
//   } else {
//     while (found === false) {
//       waktu = waktu - 15;
//       if (waktu <= 0) {
//         found = true;
//       }
//       counter = counter + 1;
//       console.log(waktu)
//     }
//   }
//   // console.log('')
//   return counter
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
