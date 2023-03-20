class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}
class Student extends Person{
    constructor(name,age,gpa) {
        super(name,age)
        this.gpa
    }
}
const std1=new Student("Maryam",20,3,42)
console.log(std1.name)

//Assigning class to a variable

var a=class teacher{
    constructor(salary){
        this.salary=salary
    }
}
console.log(typeof(a))
a.salary=909090
console.log(a.salary)