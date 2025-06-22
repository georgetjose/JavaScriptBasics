// This code demonstrates variable scoping in JavaScript using let and var
// The variable `browserVersion` is defined in the global scope and within a function.  
// var can be re-declared and reassigned in the same scope.
// let cannot be re-declared in the same scope.
// const is a constant and cannot be reassigned or re-declared.

const browserVersion = 137
var browser = "Chrome"
function getBrowserVersion() {
    if (browser === "Chrome") {
        let browserVersion = 100
        console.log("Browser Version: " + browserVersion)  
    }  
    console.log("Browser Version: " + browserVersion)
}
getBrowserVersion()