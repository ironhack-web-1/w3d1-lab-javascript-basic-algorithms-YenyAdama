console.log("Im ready!");
// Iteration 1: Names and Input
let hacker1="yeny";
let hacker2="chrome";
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
let hack1=hacker1.split("");
let hack2=hacker2.split("");
hack_d=hack1.sort();
hack_n=hack2.sort();
if(hack_d>hack_n){
    console.log("The navigator goes first definitely: "+hack_n.join(""));
}
else if(hack_d===hack_n){
    console.log("What?! You both have the same name?");
}else{
    console.log("the driver´s name goes first:"+hack_d.join(""));
}
//Bonus Time 1
const pg1='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis elementum pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus pharetra viverra. Curabitur ac ultricies nulla. Curabitur sagittis diam sem, ac consectetur erat varius placerat. Praesent pulvinar mi at nulla dapibus, sit amet tristique nunc feugiat. Ut aliquet velit sed lorem commodo, ut pretium dolor auctor. In elit erat, lobortis a consectetur ac, molestie sagittis quam. Sed et ante nec leo posuere scelerisque et at tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu sodales justo. Etiam vestibulum leo massa, quis sollicitudin mauris tincidunt eu. Fusce quis auctor ex.';
const pg2='Morbi suscipit quam cursus fermentum gravida. Aenean dictum semper sem quis porttitor. Curabitur a venenatis est. Sed commodo nisi metus, id egestas diam fringilla bibendum. Mauris volutpat id lacus ut euismod. Maecenas vitae velit sed lectus ornare volutpat. Curabitur dictum, justo facilisis rutrum dictum, nulla ante ultrices metus, non pellentesque lectus metus sed leo. Ut elit quam, pellentesque a velit nec, convallis vulputate libero. Duis at nibh a nibh ullamcorper dictum. Phasellus mattis feugiat mi sed posuere. In hac habitasse platea dictumst. Sed sollicitudin quis odio in auctor. Vestibulum iaculis velit at magna ullamcorper, eu consectetur lacus fringilla. Sed ac ex a massa consectetur sollicitudin at a ipsum.';
const pg3='Ut ut faucibus justo, id porta magna. Quisque iaculis commodo viverra. Curabitur ultrices velit vitae placerat convallis. Maecenas id eros a dui tincidunt posuere imperdiet nec tortor. Cras commodo pharetra lacus, ut efficitur elit sagittis quis. Nullam erat elit, auctor ut hendrerit a, bibendum vel orci. Nam tristique gravida vehicula. Mauris non elementum nisl. Nulla hendrerit iaculis tellus, ut varius arcu viverra eu. Integer nisl arcu, porta nec interdum id, tristique at nisi. Mauris velit dui, efficitur quis sapien vel, tincidunt molestie est. Sed ultricies, libero vehicula fermentum hendrerit, arcu ante auctor nisi, vel fermentum sapien urna id metus.';
console.log("There are "+`${pg1.length}`+" words in paragraph 1. And the word et appears "+`${pg1.split("et").length}` +" times.");
console.log("There are "+`${pg2.length}`+" words in paragraph 2. And the word et appears "+`${pg2.split("et").length}` +" times.");
console.log("There are "+`${pg3.length}`+" words in paragraph 3. And the word et appears "+`${pg3.split("et").length}` +" times.");
//Bonus 2




