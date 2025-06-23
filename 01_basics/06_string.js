const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

//. Reverse each word but keep word positions and spaces:
/*let sentence = "hello world";
let reversed = sentence
  .split(' ')  // ["hello", "world"]
  .map(word => word.split('').reverse().join('')) // ["olleh", "dlrow"]
  .join(' '); // "olleh dlrow"

console.log(reversed); // Output: "olleh dlrow"
*/



/*
| Code Part          | Meaning                      |
| ------------------ | ---------------------------- |
| `split('')`        | String → array of characters |
| `reverse()`        | Reverses the character array |
| `join('')`         | Array → string again         |
| `.map(... => ...)` | Apply to each word in array  |
*/