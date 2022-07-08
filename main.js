//task 1
console.log("Task one: ");
let userNumberOne = +prompt("Enter a number for the Fibonacci sequence");
let fibonacciNumbers = [0, 1];
// debugger;
for (let i = 0; fibonacciNumbers.length < userNumberOne; i++) {
    let prevNum = fibonacciNumbers[i];
    let nextNum = fibonacciNumbers[i + 1];
    let tempNum = nextNum;
    nextNum = prevNum + nextNum;
    prevNum = tempNum;
    fibonacciNumbers.push(nextNum);
}
console.log(fibonacciNumbers);

//task 2
let userNumberTwo = +prompt("Enter a number for the number ladder range");
let numberLadder = [];
console.log("Task two: ");
// debugger;
for (let k = 1; k < userNumberTwo + 1; k++) {
    numberLadder.push(k);
    console.log(numberLadder);
}
