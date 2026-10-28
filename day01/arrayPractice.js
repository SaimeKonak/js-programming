let elements=["java", 1, 2.5, true, false, "Pyton"];
console.log(elements);

let students= ["a", "b", "c"];
console.log(students);

for(let i=0; i< students.length; i++){
    console.log(students[i]);
}

for(let student of students){
    console.log(student);
}

let employees = ["Ayse", "Fatma", "Hayriye"];
console.log(employees);
console.log(employees.length);

employees[0] = "james";
console.log(employees);

employees.push("yeter");
console.log(employees);

employees.unshift("birinci");
console.log(employees);

employees.shift();
console.log(employees);

employees.pop();
console.log(employees);