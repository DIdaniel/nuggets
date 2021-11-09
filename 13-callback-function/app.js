function makeUppercase(value) {
  console.log(value.toUpperCase());
}

function reverse(value) {
  console.log(value.split("").reverse().join(""));
}

function handleName(name, cb) {
  const fullName = `${name} kim`;
  cb(fullName);
  // some more loginc
}

handleName("patrick", makeUppercase);
handleName("patrick", reverse);
