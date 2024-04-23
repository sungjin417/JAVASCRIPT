function Person(name, age ) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name}, age is ${this.age}`);
  };
}
let person1 = new Person('안유진', 21);
let person2 = new Person('장원영', 20);

person1.sayHello();
person2.sayHello();

