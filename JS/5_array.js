'use strict';

const arr1 = new Array();
const arr2 = [1, 2, 3];

const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.log('for------------------------------');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log('-------------------------');

for (let fruit of fruits) {
    console.log(fruit);
}

console.log('//forEach----------------');
fruits.forEach(function (fruit) {
    console.log(fruit);
});

fruits.forEach((fruit) => console.log(fruit));

console.log('Add, del, copy----------------------');

fruits.push('strawberry', 'peach');
console.log(fruits);
let poped = fruits.pop();
fruits.pop();
console.log(fruits);
console.log(poped);

fruits.unshift('strawberry', 'lemon');
console.log(fruits);

fruits.shift();
fruits.shift();
console.log(fruits);

fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
console.log('splice-----------------');
fruits.splice(1, 1);

fruits.splice(1, 1, 'pear', 'watermelon');
console.log(fruits);

const fruits2 = ['pineapple', 'mango'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.log(fruits.indexOf('apple'));

console.log(fruits.includes('watermelon'));
console.log(fruits2.lastIndexOf('mango'));
