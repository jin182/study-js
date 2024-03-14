console.log('make a string out of an array : join');
{
    const fruit = ['apple', 'banana', 'orange'];
    const result = fruit.join(',');
    console.log(result);
}

console.log('make an array out of a string ; split');
{
    const fruits = 'apple, kiwi, banana, shine_muscat';
    const result = fruits.split(',');
    const result2 = fruits.split(',', 2);
    console.log(result);
    console.log(result2);
}
console.log('make this array look like this: [5,4,3,2,1] : reverse');
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}
console.log('make new array without the first two elements :');
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('c', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

console.log('find a student with the score 90 : find');
{
    console.log('find-----------------');
    const findresult1 = student.find(function (student, index) {
        console.log(student, index);
    });

    console.log(findresult1);

    const findresult2 = student.find(function (student) {
        return student.score === 90;
    });
    console.log(findresult2);
}

console.log('-------find arrow func------------');
{
    const result = student.find((student) => student.score === 90);
    console.log(result);
}
console.log('make an array of enroolled student filter');
{
    console.log('--filter --------------------');
    const result = student.filter(function (student) {
        return student.enrolled;
    });
    console.log(result);
}
console.log('---filter arrow func------------');
{
    const result = student.filter((student) => student.enrolled);
    console.log(result);
}

{
    console.log('--filter2----------------');
    const result = student.filter((student) => student.age >= 30);
    console.log(result);
}

console.log("make an array containing only the the student' score : map");

{
    const result = student.map(function (student) {
        return student.score;
    });
    console.log(result);
}

{
    const result = student.map((student) => student.score);
    console.log(result);
}

console.clear();
{
    console.log('---some-------------- (parameter) student : student');
    const result = student.some(function (student) {
        return student.score >= 50;
    });
    console.log(result);
}

{
    const result = student.some((student) => student.score <= 50);
    console.log(result);
}

{
    const result2 = !student.every((student) => student.score >= 50);
    console.log(result2);
}
console.log("compute student' average score : reduce, reduce, reduceRight");
{
    const result = student.reduce(function (prev, curr) {
        console.log(prev);
        console.log(curr);
        console.log('-----------------');

        return prev + curr.score;
    }, 0);

    console.log(result / student.length);
}

{
    const result = student.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / student.length);
}

console.log(',ake a string containing all the score');

{
    const result = student.map((student) => student.score).join(',');
    console.log(result);
}
{
    const result = student
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result);
}

console.log('sort in ascending order');

{
    const result = student
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join();
}
