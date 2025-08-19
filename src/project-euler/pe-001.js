var range = Array.from({ length: 1000 }, function (_, i) { return i; });
range.forEach(function (i, index) {
    if (index % 100 == 0) {
        console.log("Index ".concat(index, ": ").concat(num));
    }
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
});
console.log("The answer to Project Euler 001 is " + sum);
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
}
console.log("The answer to Project Euler 001 is " + sum);
