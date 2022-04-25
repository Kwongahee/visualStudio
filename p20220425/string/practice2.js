// string/practice2.js

let sso=['970101-1234567','970101 2234767','9701011234567','970101/1434567'];

function checkGender(ssn) {
  let gender = ssn.replace(/\D/, '' ).charAt(6)
  if(gender==1 || gender==3) {
    return '남자';
  } else if(gender==2 ||gender==4){
    return '여자';
  }}
  
 
  // sso.forEach(function(el) {
  //   let result=checkGender(el)
  //   console.log(result)
  // });

sso.forEach(el => {
  let result=checkGender(el)
  console.log(result)
});  // sso의 값을 모두 비교하기 위해서

