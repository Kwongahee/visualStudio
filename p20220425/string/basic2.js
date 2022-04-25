//string/basic2.js

//indexOf(), lastIndexOf() : 찾을 문자열의 위치인덱스 반환.
// 있으면 해당되는 글씨 위치, 없으면 -1 반환
let result = '안녕하세요 가희입니다'.indexOf('가희');
 result = '안녕하세요 가희입니다. 여기는 가희의 방입니다.'.lastIndexOf('가희');
 result = '안녕하세요 가희입니다. 대구의 가희, 서울의 가희, '.indexOf('가희', 16);
 let str1 = '안녕하세요 가희입니다. 대구의 가희, 서울의 가희, 부산의 가희';
 let position = str1.indexOf('부산'); // '부산'의 위치인덱스.
 result = str1.indexOf('가희', position);

 // charAt(인덱스) : 인덱스위치의 문자 반환 
 let str2 = str1.charAt(result);
 console.log(str2)

 //toLowerCase(), toUpperCase() : 문자변경
 let str3 = 'Lorem ipsum DOLOR SIT amet consectetur dolor'
 console.log(str3.toUpperCase().toLowerCase())

 // includes('찾을 문자열') : true / false
 result =  str3.includes('dolor');
 console.log(result);

// search('찾을 문자열') 추가기능: search(정규표현식); 찾을 문자열의 인덱스 반환
// 정규표현식 오브젝트 / /(new RegExp()), 배열 [](new Array(1,2)),
 result = str3.toLowerCase().search('sit') //소문자.대문자 구분있음
result = str3.search(/dolor/i); // (i)대소문자 구분없이 ~를 찾겠다.[]
console.log(result);

//match('찾을 문자열') : 문자열 or null 반환.
let str4 ='bad MORNING, goodmorning, GOOD AFTERNOON, good evening, and good night';
result = str4.match('good');
result = str4.match(/good\s\w+/gi); // (g) 여러개 나오면 여러개 찾겠다. . s:공백. w:문자하나.
console.log(result);


//replace('찾을 문자열','바꿀 문자열')
result = str4.replace('good','better')
result = str4.replace(/good/ig,'better')
result = str4.replace(/\W/ig, '-')// W: 문자 이외. d : 숫자 D : 숫자 이외
result = 'morning1 morning12 morning123'.replace(/\d/g, '')

let sso=['970101-1234567','970101 1234767','9701011234567','970101/1434567'];
sso.forEach(num => console.log(num.replace(/\D/g, '')))

console.log(result);

// 문자열 합치기: +, concat()
console.log('hello' + 'world');
console.log('hello'.concat(' world', '!!', ' welcome'));
