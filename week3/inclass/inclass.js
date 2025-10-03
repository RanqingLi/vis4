var myname ='Rachel'
let location ='LA'

const weather = "sunny"
let year = 2025
let happy=true;
let person={};//命名obeject空集
person.name = myname//.后面是属性
person.year = year


console.log(person)

function greet(){
	return "hello," + myname +"!" +"2025"
}
greet(myname)
console.log(greet(myname))

function numberadder(first,second){
	sum = first + second
	console.log(sum)
	return(sum)
}
console.log(numberadder(10,8))



//scope
let globalVar = "I am global";

function showScope() {
    let localVar = "I am local";
    console.log(globalVar); // Can access globalVar
    console.log(localVar); // Can access localVar
}

showScope();
console.log(localVar); // Error: localVar is not defined





