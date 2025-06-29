//ClassRoom:
//let input="Learn String and Function"
//Split word 
//print resever order
//output : Function and String Learn

let input="Learn String and Function"
let words = input.split(" ");
console.log("Words: ", words);
let reverseWords = "";
reverseWords = words.reverse().join(" ");
console.log("Reversed Order: ", reverseWords);
