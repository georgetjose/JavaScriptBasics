//strict equality compares both value and type
//loose equality compares only value and not type

let a = 5;
let b = "5";
let c = false;
let d = 0;
console.log(a===b)
console.log(a==b)
console.log(c===d)
console.log(c==d)

true && true; // true
true && false; // false
false && true; // false
false && false; // false
true || true; // true
true || false; // true
false || true; // true
false || false; // false
