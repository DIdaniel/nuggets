// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ["apple", "orange", "lemon", "banana", "pear"];
const [first, second, ...rest] = fruits;

console.log(first, second, rest);

// objects
const person = { name: "john", lastName: "smith", job: "developer" };
const { name } = person;
//console.log(name);

// functions
