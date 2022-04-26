 // function/basic.js
//1.함수는 함수선언식으로 정의.
function sum(num1, num2) {
  console.log(num1, num2);
  return num1 + num2;
}
//let sum = function sum(num1,num2){} 변수는 이미 선언된것!
let result = sum(10, 20, 30);
console.log('결과는 ' + result);

//2.함수표현식으로 정의
let myfnc = (val1, val2) => { //화살표함수
  var myVal = 10;
  return val1 + val2 + myVal;
}
console.log(typeof myfnc, myfnc)
result = myfnc(10, 20);
console.log(result);

//let sum = myfnc; sum 변수는 처음 선언 ! 근데 선언되어있다함.
//function은 object타입.. function > 메소드기능 비슷(?)

let mysum = myfnc;
result = mysum(20, 30);
console.log(result);

const person = {
  fullName: 'Hong',
  age: 20,
  height: 175.3
}

const person1 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}

const person2 = {
  fullName: 'Park',
  age: 21,
  height: 180
}

let myinfo = function (obj) {
  var info = `${obj.fullName}이고 ${obj.age}살이고 키는 ${obj.height}cm입니다.`
  return info
}

result = myinfo(person);
console.log(result);

const persons = [person, person1, person2];
for (let person of persons) {
  let result = myinfo(person);
  console.log(result);
}


//배열의 경우에만 foreach 실행 가능
console.clear();//결과하나만 보기위해 클리어
//자바스크립트에서 문자열, 숫자, boolean, 배열 => 매개값으로 사용.
//함수를 매개변수로 사용가능.
// let funcParam = function (val, ind, ary)  {
//   // console.log(val,ind,ary);
//   console.log(myinfo(val))
// };

let funcParam = (val, ind, ary) => { //화살표함수
  // console.log(val,ind,ary);
  console.log(myinfo(val))
};

persons.forEach(funcParam); //메소드의 매개값으로 활용되는 함수 = > 콜백함수