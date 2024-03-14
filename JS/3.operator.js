console.log('1. String concatenation====================================');
console.log('my' + ' text');
console.log('1' + 2);
console.log(`String literals: 1 + 2 = ${1 + 2}`);

console.log(`String literals:
'''''
1 + 2 = ${1 + 2}
`);

console.log(`\', \n, \t string`);

console.log('2. Numberic operators=======================================');
console.log(1 + 1);
console.log(3 - 1);
console.log(2 * 7);
console.log(10 / 4);
console.log(parseInt(10 / 4));
console.log(5 % 2);
console.log(2 ** 3);

console.log('3. Increment and decremwnt operators========================');
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement}, counter : ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter : ${counter}`);

console.log('4. Assingnment operators');
let x = 5;
let y = 7;

console.log(`x += y : ${(x += y)}`);
console.log(`x -= y : ${(x -= y)}`);
console.log(`x *= y : ${(x *= y)}`);
console.log(`x /= y : ${(x /= y)}`);

console.log('5. Comparison operators =====================');
console.log(100 < 99);
console.log(100 <= 99);
console.log(100 > 99);
console.log(100 >= 99);
console.log(100 != 99);

console.log('6. Logical operators =====================');

const value1 = false;
const value2 = 10 < 1;

console.log(`or : ${value1 || value2 || check()} `);
console.log(`and : ${value1 && value2 && check()} `);
console.log(`!value1 : ${!value1} `);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('^^');
    }
    return true;
}

console.log('7. Equality ===========================');
const stringTen = '10';
const numberTen = 10;
console.log(`stringTen == numberTen : ${stringTen == numberTen}`);
console.log(`stringTen != numberTen : ${stringTen != numberTen}`);
console.log(`stringTen === numberTen : ${stringTen === numberTen}`);
console.log(`stringTen !== numberTen : ${stringTen !== numberTen}`);

const object1 = { name: 'gbsw', age: 15 };
const object2 = { name: 'gbsw', age: 15 };
const object3 = object2;

console.log(0 == false);
console.log(0 === false);
console.log(' ' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

console.log('----------------------------------------');

const name2 = 'gbsw';
if (name2 === 'alpha!') {
    console.log('hi!, alpha');
} else if (name2 === 'beta') {
    console.log('hello beta!');
} else {
    console.log('Have a good day!');
}

console.log('================================================');
console.log(name2 === 'gbsw' ? 'very good' : 'good');

console.log('==================================================');

const browser = 'chrome';

switch (browser) {
    case 'IE':
        console.log('opps');
        break;
    case 'chrome':
        console.log('good!');
        break;
    case 'adge':
        console.log('good!');
        break;
    default:
        console.log('Using chrome or edge');
        break;
}

console.log('=============================================');
let i = 3;
while (i > 0) {
    console.log(`while : ${i}`);
    i--;
}

let k = 3;

do {
    console.log(`do while : ${i}`);
    k--;
} while (k > 0);

for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    console.log(`inline var for: ${i}`);
}

for (let i = 0; i < 10; i++) {
    for (let k = 0; k < 10; k++) {
        console.log(`i: ${i}, k: ${k}`);
    }
}

for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`even num: ${i}`);
}

for (let i = 0; i < 11; i++) {
    if (i > 7) {
        break;
    }
    console.log(`num: ${i}`);
}
