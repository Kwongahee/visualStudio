//practice3

const person1 = {  
  fullName: 'Hong',
  age: 24,
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

const persons = [person1, person2, person3];

//맵핑작업
const newPersons = persons.map(function(val, idx) {

  let newObj={}; //오브젝트 타입 선언
  newObj.index = idx+1; //오브젝트의 속성(필드)를 추가
  newObj.fName = val.fullName;
  newObj.age = val.age;
  newObj.height = val.height; 

  return newObj;
});

console.log(newPersons);


//함수정의문
function tableList(personAry){
  document.write('<table border=1>');
  document.write(`<caption>정보</caption>`)
  document.write('<tr><th>순번</th><th>이름</th><th>나이</th><th>키</th></tr>')
  for(let person of personAry){ //line 생성
     document.write('<tr>');
     for(let field in person){ //컬럼 생성
     document.write(`<td>${person[field]}</td>`);
     }
     document.write('</tr>');
  }
  document.write('</table>');
}
// 함수실행.
tableList(newPersons);