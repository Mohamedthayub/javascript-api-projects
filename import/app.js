import { addition } from "./calculator/add.js";
import { subtraction } from "./calculator/sub.js";
import { multiplication } from "./calculator/multi.js";
import { divition } from "./calculator/div.js";

let add = addition(12,2);
let sub = subtraction(10,10);
let multi  = multiplication(10,5);
let div  = divition(10/2);
console.log(add);
console.log(sub);
console.log(multi);
console.log(div);
 