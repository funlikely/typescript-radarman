var test_message = "Hello World";
console.log(test_message);

var sum = 0;
for (let i=0; i<1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
}

console.log("The answer to Project Euler 001 is " + sum);