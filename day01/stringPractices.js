let school= "CYDEO";
console.log(school);
console.log(typeof school);
console.log(school.length);
console.log(school.charAt(0));

for(let i=0; i < school.length; i++){
    console.log(school[i]);
}

school=school.toLowerCase();
console.log(school);

school=school.toUpperCase();
console.log(school);

console.log("------------");

let expectedResult="java script";
let actualResult="JAVA SCRIPT";
console.log(expectedResult === actualResult);
console.log(expectedResult.toLowerCase === actualResult.toLowerCase);

console.log("------------");

let str = "pyton pyton";
let str1 = str.replace("pyton", "java");
console.log(str1);
let str2 = str.replace(/pyton/g, "java");
console.log(str2);

console.log("------------");

let email = "abc@gmail.com";
let domain= email.substring(email.indexOf("@")+1);
console.log(domain);

console.log("------------");
let employeName = "James";
let employeSalary = 100_000;
console.log();