console.log("Im ready!");
// Iteration 1: Names and Input
let hacker1="yeny";
let hacker2="chrome"
console.log("The driver´s name is "+hacker1);
console.log("The navigator´s name is "+hacker2);
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    let text="The driver has the longest name, it has ";
    console.log(`${text} ${hacker1.length}` + ` characters.`);
}else if(hacker1.length==hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length}`);
}else{
    let text="The navigator´s has the longest name, it has ";
    console.log(`${text} ${hacker2.length}` + ` characters.`);
}
// Iteration 3: Loops
//3.1
let mayusc="";
for(let i=0;i<hacker1.length;++i){
    mayusc+=hacker1[i].toUpperCase()+" ";
}
console.log(mayusc);
//3.2
let inverter="";
for(let j=hacker2.length-1;j>=0;--j){
    inverter+=hacker2[j];
}
console.log(inverter);
//3.3
