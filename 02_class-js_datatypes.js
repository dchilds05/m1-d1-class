/* 
number,
string,
boolean,
null,
undefined
*/

//Boolean shortcuts
// || is logical OR
// && is logical AND
let myFlag = 1;

let boolShortcut;

boolShortcut = myFlag || "caffé"; // && "cappuccino";

console.log(boolShortcut);

myFlag = 1;

boolShortcut;

boolShortcut = myFlag && "caffé" && "cappuccino";

console.log(boolShortcut);

myFlag = 0;

boolShortcut;

boolShortcut = myFlag && "caffé";

console.log(boolShortcut);

/*
//Boolenas and truthy
let ifCondition;

ifCondition = 1;

if (ifCondition) {
  console.log(true);
} else {
  console.log(false);
}
*/

/*
// Strict and loose equality

let result;

result = [1, 2] == [1, 2];
console.log(result);
console.log(typeof result);

result = "" == "";
console.log(result);
console.log(typeof result);

result = [1, 2] === [1, 2];
console.log(result);
console.log(typeof result);

result = "" === "";
console.log(result);
console.log(typeof result);

result = "1" === 1;
console.log(result);
console.log(typeof result);

result = "1" !== 1;
console.log(result);
console.log(typeof result);

result = "1" != 1;
console.log(result);
console.log(typeof result);

result = "1" === "1";
console.log(result);
console.log(typeof result);

result = 1 === 1;
console.log(result);
console.log(typeof result);

result = 1 == 1;
console.log(result);
console.log(typeof result);

result = "fsda2".localeCompare("asdfeA1");

console.log(result);
console.log(typeof result);

result = "fsda2" > "asdfeA1";
console.log(result);
console.log(typeof result);

*/
