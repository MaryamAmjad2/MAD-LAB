class Employee{
constructor(name,age) {
    this.name=name
    this.age=age
}
 display(){
    console.log(`Employees name is ${this.name} , Age is ${this.age}`)
 }
}
class Manager extends Employee{
    constructor(name,age,dep){
        super(name,age)
        this.dep=dep
    }
    display(){
        super.display();{
            console.log(`They are working in department ${this.dep}`)
        }
    }
}
class Worker extends Employee{
    constructor (name,age,working_since){
        super(name,age)
        this.working_since=working_since
    }
    display(){
        super.display();{
            console.log(` Working Since ${this.working_since}`)
        }
    }
}
class SalesPerson extends Worker{
    constructor(name,age,working_since,total_Sales){
        super(name,age,working_since)
        this.total_Sales=total_Sales
    }
    display(){
        super.display();{
            console.log(`Number of item they sold are  ${this.total_Sales}`)
        }
    }
}
class Engineer extends Worker{
    constructor (name,age,working_since,Engineer_of){
        super(name,age,working_since)
        this.Engineer_of=Engineer_of
    }
    display(){
        super.display();{
            console.log(`They have done their Enginnering degree in ${this.Engineer_of}`)
        }
    }
}

var obj= new Engineer("maryam",20,2020,"Computer Science")
obj.display();