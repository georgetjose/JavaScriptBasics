let myName = "George";

let reverseName = ""
// reversename = myName.split("").reverse().join("");

for (let i = myName.length - 1; i >= 0; i--) {
    reverseName = reverseName + myName[i];
}

console.log("Position of o : "+ myName.indexOf("o"));

console.log("Character at the position 4: " + myName.charAt(4));

console.log(`Reverse : ${reverseName}`);