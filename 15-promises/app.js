const promise = new Promise((res, rej) => {
  //res([1, 2, 3]);
  rej("I gotta error");
});

promise.then((data) => console.log(data)).catch((err) => console.error(err));

console.log(promise);
