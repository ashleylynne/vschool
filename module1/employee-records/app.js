// Constructor Functions: functions that build objects of the same shape.

// Constructor Functions can be "instantiated" using the "new" keyword to create these objects.

// Ex:

// function Car(make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
// }


// var jeep = new Car("Jeep", "Cherokee", 1995)


var employees = []

function Employee(name, jobTitle, salary, status="Full Time") {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
}

Employee.prototype.printEmployeeForm = function() {
    console.log(this)
}

var john = new Employee("John", "Web Developer", "75,000")

john.printEmployeeForm()

var sally = new Employee("Sally", "Web Developer", "75,000")

sally.printEmployeeForm()

var jill = new Employee("Jill", "Writer", "40,000", status="Contract")

sally.printEmployeeForm()

employees.push(john, sally, jill)

console.log(employees)


