 // array/basic.js

 //배열선언 : [], new Array();
 let arr = [1, 2];
 let newAry = [3,4,5,6];

 //추가 : push:마지막 위치, unshift:첫번째 위치
 arr.push(3);
 arr.unshift(0);

// 제거 : pop(), shift();
arr.pop();
arr.shift();

//forEach 새로운 배열 추가
newAry.forEach(function(elem){
  // arr.push(elem);
     arr.unshift(elem)
});

 arr.pop();  //6,5,4,3,1
 arr.pop();  //6,5,4,3
 arr.shift(); //5,4,3

//splice(위치, 크기, 대체값) : 추가, 수정, 삭제
//arr.splice(1,2,8,9) => 5,8,9 , (1,1,8,9) => 5,8,9,3 , (1,0,8,9) => 5,8,9,4,3 , (1,2) =>5

newAry.forEach(function(elem){
  arr.splice(1, 1, elem);  //(1, 2, elem)5,6,5,4,3,4,3  (1, 1, elem)5,6,3
})

let names=[];
let anonym = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque quia nihil consectetur libero natus illo optio, dignissimos, culpa reprehenderit debitis hic. Inventore repellat debitis hic! Nesciunt '
//문자열 > 배열로 
anonym.split(' ').forEach(function(elem){
  names.push(elem);
});

 console.log(names.toString()); //배열, 배열,
 console.log(names)

 // forEach() : 반환X 
 // map() : 각요소 => mapping작업:( 다른 형태 반환)
 // filter() : return 조건을 만족하는 값만 반환

 let result = names.map(function(elem){
   return elem.toUpperCase();
   return res;
 }); //새로운 배열.

 result = result.filter(function(elem){
   return elem.length >=10
 });

 result=names//
 .map(elem => { let res = elem.toUpperCase();
  return res;
 })//
 .filter(elem => elem.length>=10); //chain rules
console.log(result)


// function femaleList(ary){
//   let target = document.getElementById('')
   
//   let ul = document.createElement('ul')
//   ary.aforEach(function (elem,idx) {
//       let li = document.creeateElement('li')
//       let val = '';
//       for(let field in elem) {
//         val += `${field} :  ${elem[field]} ${field=='ip_address'?'',} `
//     }
//     li.textContext=val;
//     ul.appendChild(li);  
//   })
//   target.appendChild(ul);
//  }
 