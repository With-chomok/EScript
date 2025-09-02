const objectJson = {
  name: "chomok",
  Address: "Purbadhala",
  Study: "Engineering",
  Institute: "MPI",
  Roll: 292324,
};

console.log(objectJson);
console.log("this file of data type is", typeof objectJson);

const jsonStringify = JSON.stringify(objectJson);
console.log(jsonStringify);
console.log("this file of data type is", typeof jsonStringify);

const stringifyParseJson = JSON.parse(jsonStringify);
console.log(stringifyParseJson);
console.log("this file of data type is", typeof stringifyParseJson);
