//Inheritance Through ProtoTyping in JS
// function Person(name,age){
//     this.name=name
//     this.age=age
// }
// function Student (name,age,gpa){
//     Person.call(this,name,age)
//     this.gpa
// }
// console.log(Student("Maryam",20,3.42))
// Student.prototype=Object.create(parent.prototype)
let Person={
    name:"Maryam",
    age:20
}
let Student={
    GPA:3.42
}

let Employee={
    salary:20000
}
let Teacher={
    Subject:"Maths"
}
let Staff={
    department:"CS",
    designation:"HEAD"
}
//Person.__proto__ =Student;
Student.__proto__=Person;
Employee.__proto__=Person;
Teacher.__proto__=Employee;
Staff.__proto__=Employee
console.log(Staff)
Student.prototype=Object.create(Person.prototype)

