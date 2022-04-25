// dom/pracice.js

document.addEventListener('DOMContentLoaded',function(){
  let btn = document.querySelector('button');
  //버튼에 클릭 이벤트가 실행되면 function을 실행하세요
  btn.addEventListener('click', function () {
    //입력값1, 입력값2
    let name = document.getElementById('userName').value
    let age = document.getElementById('userAge').value
  
    //태그만들때 createElement
    let span1 = document.createElement('span'); //<span>${name}</span>
    span1.innerHTML = name;
    let span2 = document.createElement('span');//<span>${age}</span>
    span2.innerHTML = age;
    let div1 = document.createElement('div');
    div1.appendChild(span1); // <div><span></span></div>
    div1.appendChild(span2); // <div><span></span><span></span></div>
  
    document.getElementById('show').appendChild(div1);
  
  });
})
