const n = parselnt(process.argv[2]);
let fact = 1;
if(isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
}else {
    for(let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${n} is ${fact}`);
}