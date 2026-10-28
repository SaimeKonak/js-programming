let score=50;
if(score >= 60 ){
    console.log("You passed the exam");
}else{
    console.log("You failed the exam");
}

console.log("----------------------");

let number = 0;
if(number > 0){
    console.log ("The number is positive");
}else if(number<0){
    console.log("The number is negative");
}else{
    console.log("number is zero");
}

console.log("-------------------");

score =500;
if(score >= 0 && score <= 100){
if(score >= 60 ){
    console.log("You passed the exam");
}else{
    console.log("You failed the exam");
}
}else{
    console.log("invalid score");
}

let environment = "qa";
switch (environment) {
    case "qa":
        console.log("You are in the QA environment");
        break;
    case "dev":
        console.log("You are in the DEV environment");
        break;
    default:
        console.log("You are in an unknown environment");
}
console.log("-------------------");
