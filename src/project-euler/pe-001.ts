// const range = Array.from<number>({ length: 1000 }, (_, i) => i);

//console.log(range);
let sum = 0;

// range.forEach(function (i, index) {
//     if (index % 100 == 0) {
//         console.log("Index ".concat(index, ": ").concat(i));
//     }
//     if (i % 3 == 0 || i % 5 == 0) {
//         sum += i;
//     }
// });
// console.log("The answer to Project Euler 001 is " + sum);

sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
}
console.log("The answer to Project Euler 001 is " + sum);
