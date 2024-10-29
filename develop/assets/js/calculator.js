
const save = document.getElementById('save-el')
let sumTot = document.getElementById('sum-el')

function sum (){
    const firstNum = parseFloat(document.getElementById('firstNum-el').value);
    const secondNum = parseFloat(document.getElementById('secondNum-el').value);
    let result = firstNum + secondNum;
    sumTot.textContent = `The sum is: ${result}`;

    saveMemory (result);
}
function sub (){
    const firstNum = parseFloat(document.getElementById('firstNum-el').value);
    const secondNum = parseFloat(document.getElementById('secondNum-el').value);
    let result = firstNum - secondNum;
    sumTot.textContent = `The difference is: ${result}`;

    saveMemory (result);
}
function mult (){
    const firstNum = parseFloat(document.getElementById('firstNum-el').value);
    const secondNum = parseFloat(document.getElementById('secondNum-el').value);
    let result = firstNum * secondNum;
    sumTot.textContent = `The product is: ${result}`;

    saveMemory (result);
}
function div (){
    const firstNum = parseFloat(document.getElementById('firstNum-el').value);
    const secondNum = parseFloat(document.getElementById('secondNum-el').value);
    let result = firstNum / secondNum;
    sumTot.textContent = `The quotient is: ${result}`;

    saveMemory (result);
}

const openCalculatorLink = () => {
    window.open('calculator.html', '_same');
}

const saveMemory = (result) => {
    let memArray = JSON.parse(localStorage.getItem('memArray')) || [];
    memArray.unshift(result);

    localStorage.setItem('memArray', JSON.stringify(memArray));

    save.textContent = `Memory: ${memArray}`;
}