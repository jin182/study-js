function calculate() {
    const operator = document.getElementById('operator').value;
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            alert('잘못된 입력입니다.');
            result = 0;
    }
    document.getElementById('result').innerHTML = '결과 : ' + result;
}
