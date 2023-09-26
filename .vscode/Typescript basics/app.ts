var num1Element = document.getElementById('num1') as HTMLInputElement;
var num2Element = document.getElementById('num2') as HTMLInputElement;
var buttonElement = document.querySelector('button')!;

type NumOrString = number|string

function add(num1:NumOrString  , num2: NumOrString) {

    if(typeof num1==='number'&&typeof num2==='number'){
    return num1 + num2;
    }
    else if(typeof num1==='string'&&typeof num2==='string'){
        return (num1+''+num2)
    }
    return +num1 + + num2;
}

const numResults:number[]=[]
const stringResults:string[]=[]

function printResult(resultObj:{val:'number';timestamp:Date}){
    console.log(resultObj.timestamp)
}

buttonElement.addEventListener('click', () => {
const num1=num1Element.value
const num2=num2Element.value
const result = add(+num1 ,+num2)
console.log(result)
numResults.push(result as number)
stringResults.push(result as string)
console.log(numResults,stringResults)

printResult({val:result as 'number',timestamp:new Date()})

const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve('itworked!')
    },1000)
})
myPromise.then((result)=>{
    console.log(result)
})
})