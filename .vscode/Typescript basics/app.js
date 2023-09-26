"use strict";
var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return (num1 + '' + num2);
    }
    return +num1 + +num2;
}
const numResults = [];
const stringResults = [];
function printResult(resultObj) {
    console.log(resultObj.timestamp);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    console.log(result);
    numResults.push(result);
    stringResults.push(result);
    console.log(numResults, stringResults);
    printResult({ val: result, timestamp: new Date() });
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('itworked!');
        }, 1000);
    });
    myPromise.then((result) => {
        console.log(result);
    });
});
