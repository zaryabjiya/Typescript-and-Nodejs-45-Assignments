// Have at least one True and one False result for each of the following: 

// 1. Tests for equality and inequality with strings.
console.log("Equality test with strings: ", "Apple" ==="Apple");
console.log("Inequality test with strings: ", ("Apple" as string) != "Mangro");

// 2. Tests using the lower case function
console.log("Lower case function test: ", "Hello".toLowerCase() === "hello");

// 3. Numerical tests involving equality and inequality.
console.log("Equality test with numbers: ", 25 === 25);
console.log("Inequality test with numbers: ", (25 as number) !== 45);

// 4. greater than and less than.
console.log("Greater than test: ", 25 > 15);
console.log("Less than test: ", 15 < 25);

// 5. greater than or equal to, and less than or equal to
console.log("greater than or equal to test: ", 10 >= 10);
console.log("less than or equal to test: ", 5 <= 10);

//Tests using "and" and "or" operators.
console.log("And operator test: ", 5===5 && 10 > 5);
console.log("Or operator test: ", false || 25 > 15);

//Test whether an item is in a array.
let fruits :string[] = ['Apple', 'Mango', 'Orange', 'Cherry']
console.log('Test "Mango" in the array:', fruits.includes("Mango"));

// Test whether an item is not in a array.
console.log('Testing "Banana" is not in the array:', !fruits.includes("Banana"));











