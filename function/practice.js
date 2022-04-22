//practice.js

const numbers = [23, 45, 32, 55, 34, 72];


let sum = 0;
for (let i=0; i<numbers.length; i++){
  if(numbers[i]%2 ==0 )
  sum +=numbers[i];
}
console.log('합 : '+sum)

sum=0;
for (let number of numbers) {
  if(number % 2 ==0){
    sum +=number;
  }
}
console.log('합 : '+sum)


sum=0;
numbers.forEach((param, idx) => {
  console.log(param,idx);
  if(param % 2 == 0){
    sum += param;
  }
});
console.log('합 : '+sum)


//함수표현식으로 하는게 식이 깔끔 
let evenSum = (param, idx) => {
  console.log(param,idx);
  if(param % 2 == 0){
    sum += param;
  }
};

let oddSum = (param, idx) => {
  console.log(param,idx);
  if(param % 2 == 1){
    sum += param;
  }
};

//함수식을 forEach의 매개값으로 사용해도 됨.
sum=0;
numbers.forEach(evenSum);
console.log('합 : ' + sum);

