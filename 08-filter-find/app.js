const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "intern" },
];

// filter
const youngPeople = people.filter((person) => {
  return person.name !== "peter";
});

console.log(youngPeople);

// no match
const seniorDevs = people.filter((person) => person.position === "intern");
console.log(seniorDevs);
// find

const peter = people.find((person) => person.name === "susy");
console.log(peter);
// no match

// multiple matches - first match
