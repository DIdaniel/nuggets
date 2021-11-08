const person = {
  name: "John",
};

console.log(person.name);

person.age = 25;

console.log(person);

//

const items = {
  "featured-items": ["item1", "item2"],
};

console.log(items["featured-items"]);
console.log(person["name"]);

let appState = "loading";
const keyName = "Computer";
const app = {
  [appState]: true,
};

app[keyName] = "APPLE";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: '"',
};

function updated(key, value) {
  state[key] = value;
}

updated("name", "Patrick");
updated("job", "Developer");
console.log(state);
// const person = ['hello', 'great'];

// const testPerson = person.map(function (item) {
//   console.log(item);
// });

// const newPerson = person.map(function (item) {
//   if (item === 'hello') {
//     return item.toUpperCase();
//   }
//   return item;
// });
// console.log(newPerson);
