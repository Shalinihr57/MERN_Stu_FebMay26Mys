// filter method
// let marks = [75,49,56,70,82,51,68];
// let passed = marks.filter(mark => mark >=70);
// console.log(marks);
// console.log(passed);

let students = [
    {name:"S", marks:75},
    {name:"Ms", marks:49},
    {name:"M", marks:56},
    {name:"T", marks:70},
    {name:"H", marks:82},
    {name:"N", marks:51},
    {name:"o", marks:68},
];
let qulifiedStudent = students.filter(student => student.marks >= 70);
console.log(students);
console.log("qulifiedStudent",qulifiedStudent);
let qulifiedName = qulifiedStudent.map(student => student.name);
console.log("qulifiedName",qulifiedName);