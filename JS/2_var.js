'use strict';

let golbalName = 'global variable';
{
    let localName = 'Java';
    console.log(localName);
    localName = 'Hello';
    console.log(localName);
    console.log(golbalName);
}

// console.log(localName);
console.log(golbalName);

{
    age = 4;
    var age;
}
console.log(age);

const daysInweek = 7;
const MaxNumber = 5;

const count = 17;
const size = 17.1;
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

const infinity = 1 / 0;
const nagativeInfinity = -1 / 0;
const nAn = 'nat a number' / 2;
console.log(infinity);
console.log(nagativeInfinity);
console.log(nAn);

const char = 'k';
const gbsw1 = 'gbsw1';
const greeting = 'hello ' + gbsw1;
console.log(`value : ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${gbsw1}`;
console.log(`value: ${helloBob}, type : ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

const canRead = true;
const test = 3 < 1;

console.log(`value: ${canRead}, type${typeof canRead}`);
console.log(`value: ${test}, type : type: ${typeof test}`);

let notthing = null;
console.log(`value : ${notthing}, typeof : ${typeof notthing}`);

let x;
let y = undefined;
console.log(`value : ${x}, typeof : ${typeof x}`);
console.log(`value : ${y}, typeof : ${typeof y}`);

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);

// console.log(`value: ${symbol1}, type: ${typeof symbol1}`);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

let text = 'jacascript';
console.log(text.charAt(0));
console.log(`value : ${text}, type: ${typeof text}`);
text = 1;
console.log(`value : ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type: ${typeof text}`);
text = 'GBSW' / '2';
console.log(`value : ${text}, type: ${typeof text}`);

const gbsw = { name: 'alhagom', age: 52 };
console.log(gbsw);
gbsw.name = 'betagom';
gbsw.age = 20;
console.log(gbsw);
