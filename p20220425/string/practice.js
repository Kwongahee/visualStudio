// string/practice.js

let str1= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque quia nihil consectetur libero natus illo optio, dignissimos, culpa reprehenderit debitis hic. Inventore repellat debitis hic! Nesciunt accusamus ratione consequatur.';

//단어의 길이가 10개 이상인 값을 골라내서 > 필터
// 콤마로 구분,,.,. 

console.log('hello',length)



let result = str1.split(' ').filter(el => el.length >=10).join(' / ');
//필터 > 배열 .. 배열을 join으로 문자열로 만들기
console.log(result);