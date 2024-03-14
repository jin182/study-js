// 'use strict';

function add(a, b) {
    const sum = a + b;
    return sum;
}

doSomething();

function doSomething() {
    console.log('hello');
}

const result = add(1, 2);
console.log(result);

const result2 = add(2, 3);

function add(a, b) {
    const sum = a + b;
    return sum;
}

doSomething(add);
doSomething(add());

function printHello() {
    console.log('Hello');
}

printHello();

function printMsg(message) {
    console.log(message);
}

printMsg('hi');
printMsg(1234);

function chageName(obj) {
    obj.name = 'byms';
}

const gbsw = { name: 'gbsw' };
console.log(gbsw);
chageName(gbsw);
console.log(gbsw);

function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage('hi!');

function showMessage2(message, from) {
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage2('hi!!');

function showMessage3(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage3('hi!!');

function printAll(...args) {
    console.log('첫번쨰 방법');
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    console.log('두번쨰 방법');
    for (const arg of args) {
        console.log(arg);
    }
    console.log('세번쨰 방법');
    args.forEach((arg) => console.log(arg));
}

printAll('red', 'green', 'blue', 'white', 'black');

let glabalMessage = 'global';

function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(glabalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'good luck';
        console.log(childMessage);
    }
    printAnother();
    // console.log(childMessage);
    return undefined;
}

printMessage();

console.log(`sum: ${sum(3, 4)}`);

function sum(a, b) {
    return a + b;
}

const result3 = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);
console.log(`sum: ${result3}`);

function upgardeUser(user) {
    if (user.point > 10) {
    }
}

function upgardeUser(user) {
    if (user.point > 10) {
        return;
    }
}

const print = function () {
    console.log('print');
};
print();
const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));

function randomQuiz(answer, printYes, printNo) {
    if (answer === 'thanks you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('Yes!');
};

const printNo = function () {
    console.log('NO!');
};

const simplePrint = () => console.log('simplePrint');

simplePrint();

const add1 = function (a, b) {
    return a + b;
};

const add2 = (a, b) => {
    return a + b;
};

const simpleMultply = (a, b) => {
    return a * b;
};

console.log(simpleMultply(5, 6));

(function hello() {
    console.log('Hello...');
})();
