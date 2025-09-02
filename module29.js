// console.log("Start of file");

function addNumber(sum1, sum2) {
  const totalNumber = sum1 + sum2;
  // console.log(totalNumber);
}

addNumber(10, 10);
// default value

function sum(a = 0, b = 20) {
  const totalSum = a + b;
  // console.log(totalSum);
}

sum(10);
// string default value
function string(fname, lname = "") {
  const nameIs = fname + " " + lname;
  // console.log(nameIs);
}
string("Dly");

// template string using
const recog = `'i ama dipol das chomok
 and 
i am learning programming 
with ecmaScript ,,
this is very nice language
 for smoothly work'`;
// console.log(recog);

function samation(a, b) {
  const total = `hare result is ${a + b * 4} of add`;
  // console.log(total);
}
samation(20, 40);
// arrrow function

function sum(x, y) {
  // return x + y;
}
sum(2, 3);

const sumnum = function (s, y) {
  const result = s + y;
  // console.log(result);
};
sumnum(2, 3);

const sumNum = (p, r) => p + r;
const results = sumNum(2, 3);
// console.log(results);

const multiply = (a, b) => a * b;
const mult = multiply(2, 3);
// console.log(mult);

const substration = (b, c) => b - c;
const sub = substration(5, 4);
// console.log( sub);

// multiline arrow function
const multArrow = (a, b) => {
  let nums = multArrow(a + b);
  let num = nums(3, 4);
  let result = num;

  // console.log(result);
};

// spread Operator
let number = [4, 5, 6, 7, 8];
let newnumers = [1, 2, 3, ...number, 9, 10, 12];
// console.log(newnumers);

let numbers = [10, 20, 30, 4, 0, 50, 60, 80, 7, 90];
const copyNum = [...numbers];
const copyNumpush = [...copyNum];
copyNumpush.push(2222, 3000, 5000);
// console.log(copyNum);
// console.log(copyNumpush);
let max = Math.max(...copyNumpush);
// console.log(max);

const objects = {
  name: "dipol",
  age: "20",
  address: "Mymensingh",
};
// console.log(objects);

const newObj = { ...objects, designation: "programmer", study: "Engineering" };
// console.log(newObj);

// const person1 = { name: "dipol das", from: "bangladesh" };
// const person2 = { name: "chomok", from: "Uganda" };
// // console.log(person1);

// const bothPersons = { ...person2, ...person1 };
// console.log(bothPersons);

// freez of object or array etc delete create update anything don't wrking

// seel of object --- no work  just upadte

// distruct object
const freezs = {
  name: "chomok",
  roll: 266487,
  subss: "CST",
  Ins: "MPI",
};
// console.log({freezs.keys})

// const names = freezs.name;
// const rolls = freezs.roll;
// console.log(names);
// console.log(roll);
const { name, roll } = freezs;
// console.log(name, roll);

// const {subss, Ins} = freezs;
// // console.log(subss, Ins)
// const deletes = delete(name);
// freezs.push("mango")

// console.log(freezs);

const names = Object.keys(freezs);
const value = Object.values(freezs);
const values = Object.keys(newObj);
// console.log(values);
const counsts = Object.values(newObj);
// console.log(counsts);
const entries = Object.entries(newObj, freezs);
// console.log(entries);

// console.log(value);
// Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

// console.log(names);
let myObject = { name: "Alice", age: 30, city: "New York" };
//  Object.freeze(myObject);

myObject.name = "dipol";
myObject.age = 20;
myObject.city = "BD";
delete myObject.age;
delete myObject.city;
delete myObject.name;
//  const myObjects = Object.freeze(myObject)
// console.log(myObject);

//   let myArray = [];
// myArray.push(myObject);
// console.log(myArray);

//  console.log(myObject);
//  const objSeel = {
//   name : "hasna",
//   bari: "kuuet",
//   kikoy: "biye korbe"
//  }
//  let seel = Object.seal(objSeel)

let myObj = { name: "Alice", age: 30, city: "New York" };
for (let cleanObj in myObj) {
  // const obj = cleanObj;
  // console.log(cleanObj);
}
let myarrr = [
  1, 2, 5, 4, 7, 8, 54, 6, 4, 8, 4, 1, 5, 6, 21, 6, 5, 23, 1, 5465, 54, 6451,
  3213, 654, 6, 1231,
];
for (let arr of myarrr) {
  // console.log(arr);
}
// mapping

const numberss = [2, 4, 7, 5, 6, 3, 5, 4, 4, 4, 4, 4, 6];
const fiveItems = numberss.map((num) => num * 2);
// console.log(fiveItems);

const itemsMaping = numberss.map((num) => num * 2);
// console.log(itemsMaping);
// string mapping

const friends = ["dipol", "chomok", "kodbel", "ambel"];
const lengtsFriends = friends.map((fri) => fri.length);
const fleet = friends.map((fname) => fname[0].toLocaleUpperCase());
// console.log(fleet);

// console.log(lengtsFriends);

const nums = [
  1, 5, 9, 3, 4, 5, 7, 6, 5, 4, 8, 5, 46, 4, 5, 4, 8, 5, 254, 87, 87, 54, 6, 7,
  6, 6,
];

const filterNumber = nums.filter((x) => x > 1 * 2);
const Evne = numbers.filter((x) => x % 2 === 0);
// console.log(filterNumber);
// console.log(Evne);

const find = numbers.find((x) => x % 2 === 0);
// console.log(find);

const sturdensts = [
  { id: 1, name: "abul", dept: "cst", mark: 45 },
  { id: 2, name: "Kabul", dept: "Est", mark: 55 },
  { id: 3, name: "Mabul", dept: "Kst", mark: 85 },
  { id: 4, name: "SAbul", dept: "Cst", mark: 95 },
];

const funding = sturdensts.filter((study) => study.mark > 80);
const dept = sturdensts.filter((dept) => dept.dept === "cst");
const namess = sturdensts.filter((names) => names.name === "abul");
// console.log(namess);

// console.log(dept);

// console.log(funding );

const persons = [
  { name: "chondra", roll: 20, results: 45, Ins: "MPI" },
  { name: "ahad", roll: 2, results: 55, Ins: "kPI" },
  { name: "simul", roll: 3, results: 85, Ins: "dPI" },
  { name: "hisbul", roll: 8, results: 35, Ins: "gPI" },
  { name: "hafra", roll: 6, results: 75, Ins: "MuI" },
];

// const findMethod = persons.filter(result => result.result > 50)
// console.log(findMethod);
const rollMethod = persons.find((r) => r.roll === 6);
// console.log(rollMethod);
// console.log("End of file");
const nameMap = persons.map((p) => p.name);
// console.log(nameMap);

const roppMap = persons.map((p) => p.roll);
// console.log(roppMap);

const resultMap = persons.map((r) => r.results);
// console.log(resultMap);

persons.forEach((p) => {
  // console.log(`name: ${p.name} got marks ${p.results}`);
});

for (let res of persons) {
  // console.log(`name: ${res.name} got marks ${res.results}`);
}

persons.forEach((r) => {
  // console.log(`name: ${r.name} of roll is: ${r.roll}`);
});

// reduce method

const reduces = [2, 4, 2];
// console.log(reduces.reduce((acc, curr) => acc * curr))

// class of js

class person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  great() {
    // console.log(
    // `hi brother . I am a ${this.name} and my age is ${this.age}. I am come from ${this.location} .nice to meet you.see you again.thank you`
    // );
  }
  player() {
    // console.log(`I am ${this.name} and my team name is basca`);
    //
  }
}

const greetingsStart = new person("Cu kong john", 20, "Suganda");
const playerGreat = new person("scotke", 30);
playerGreat.player();
greetingsStart.great();

// truethy velue let
let data;
data = 0;
data = ""; //empty string falsy
data = " "; //white space is truthy
data = "0";
data = false;
data = true;
data = null;
data = {};
data = [];
data = false;
data = [];
// console.log("value of data", data);

if (data) {
  // console.log("value of data thruthy ", data);
} else {
  // console.log(data, "data is falsy");
}

if (!data) {
  // console.log("data is falsy inside if");
}
if (!!data === true) {
  // console.log("only true inside the double not");
}

// triple eqaul 
console.log(1 === 1);

console.log(true === 1);
console.log(false === 1);

console.log(true === true);
console.log(2 === '2');
console.log(2 == 2);


//if one value is string, another is number :covnvertng string >number then compare
//if one number is boolean 


// scope of block and scope and global 

if (name = 0 ){
  console.log('my name is block ');
  
}