// Person class with constructor, getter, and setter
class Person {
  constructor(name, age) {
    this._name = name;  // Store name in a private property
    this._age = age;    // Store age in a private property
  }
  
  // Getter for name
  get name() {
    return this._name;
  }
  
  // Getter for age (needed to read the age)
  get age() {
    return this._age;
  }
  
  // Setter for age
  set age(age) {
    this._age = age;
  }
}

// Student class inherits from Person
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class inherits from Person
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
