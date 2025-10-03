let globalVar = "I am global";

function showScope() {
    let localVar = "I am local";
    console.log(globalVar); // Can access globalVar
    console.log(localVar); // Can access localVar
}

showScope();
console.log(localVar); // Error: localVar is not defined