//practice2
const num1 =10;    //number type
const person1 = {  //object type
  fullName: 'Hong',
  age: 20,
  height: 165.3
}

const person2 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}

const person3 = {
  fullName: 'Park',
  age: 21,
  height: 180
}

const persons = [person1, person2, person3]; //자바는 배열{} 자스는 오브젝트{}, 배열[]

////////////평균나이
//for(let person of persons){} == persons.forEach();
let avgAge=0;
let sum=0;
for(let person of persons){
  sum+= person.age;
}
avgAge=sum/persons.length;
console.log(`평균나이 : ${avgAge}`)
console.clear;
//------------------------위아래식 같은 결과 나옴.. 
sum=0;
persons.forEach(function(val){
 sum += val.age;
});
let avgAgeFnc = function(val){
  sum +=val.age;
};
avgAge=sum/persons.length;
console.log(`평균나이 : ${avgAge}`)


////////////평균키
let avgHeightFnc = function(val){
  sum +=val.height;
}
sum=0;
persons.forEach(avgHeightFnc);
avgHeight= sum / persons.length;
console.log(`평균키 : ${avgHeight}`)


///////////태그사용
let tag="";
// *이름, 나이, 키
// *이름, 나이, 키
// *이름, 나이, 키
persons.forEach(function(val, idx) {
  if(idx==0){
    tag+='<ul>';
  }
  tag += `<li> ${val.fullName}, ${val.age},${val.height} </li>`;
  if(idx==persons.length-1){
    tag +='</ul>';
  }
});
// console.log(tag);
// document.write(tag);

// 170이상만 나타나게
let allPerson = function(val, idx) {
  if(idx==0){
    tag+='<ul>';
  }
  tag += `<li> ${val.fullName}, ${val.age},${val.height} </li>`;
  if(idx==persons.length-1){
    tag +='</ul>';
  }
};
let over170 = function(val, idx){
  console.log(val,idx);
  if(idx==0){
    tag+='<ul>';
  }
  if(val.height>=170){
  tag += `<li> ${val.fullName}, ${val.age},${val.height} </li>`;}
  if(idx==persons.length-1){
    tag +='</ul>';
  }
}
persons.forEach(over170)
// console.log(tag);
document.write(tag);

