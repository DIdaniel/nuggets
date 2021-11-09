// faster/easier way to access/unpack values from arrays

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
function printPerson(person) {
  const { first, last, city, siblings } = person;

  console.log(`Hi I am ${first} ${last}. I am living in ${city}`);
}

printPerson(bob);
