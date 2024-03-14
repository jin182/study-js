'use strict';

console.log('// 1.Declarations ----------------------');
class Parson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`My name id ${this.name}`);
    }
}

const gbsw = new Parson('gbsw', 17);
console.log(gbsw.name);
console.log(gbsw.age);
gbsw.speak();

// console.log('//2. Getter and setters ----------');
// class User {
//     constructor(fristname, LastName, age) {
//         this.fristname = fristname;
//         this.LastName = LastName;
//         this.age = age;
//     }

//     get age() {
//         return this._age;
//     }
//     set age(value) {
//         // if (value < 0) {
//         //     throw Error('age can not be negative');
//         // } else {
//         //     this._age = value;
//         // }
//         // this._age = value;
//         this._age = value < 0 ? 0 : value;
//     }
// }

// const user1 = new User('gildong', 'hong', -2);

console.log('//5. Inheritance -----------------------------');
class shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color------`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends shape {}

class Triangle extends shape {
    draw() {
        super.draw();
        console.log('▴');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(10, 10, 'red');
rectangle.draw();
const triangle = new Triangle(10, 10, 'white');

console.log(rectangle.getArea());
console.log(triangle.getArea());

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Triangle);

console.log(triangle instanceof Object);
