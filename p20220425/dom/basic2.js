// dom/basic.js

// DOM : 생성, 속성, 삭제, 부모-자식 관계.

//순차적으로 처리하기때문에 밑에 있어야 태그를 찾을 수 있음
// addEventLister('이벤트이름', '실행할 이벤트 핸들러')
console.log()
document.addEventListener('DOMContentLoaded', function(){

  console.log()
  let h3Tag = document.getElementsByTagName('h3'); //HTMLCollection
  console.log(h3Tag); 
   h3Tag[0].innerHTML = 'content changed.';

  let first = document.getElementById('first') // element
  console.log(first)
  first.innerHTML='Git Changed'

  let second = document.getElementsByClassName('first')
  second[0].innerHTML='사과';

  // CSS의 선택자 h3 > div 
  //이런 조건 만족하면 다 가져오겠습니다.  
  //querySelector는 한건만 출력 querySelectorAll은 모두가져옴
  let list = document.querySelectorAll('ul>li'); 
  console.log(list);
  list[0].style.backgroundColor = 'red';
  list[1].style.backgroundColor = 'yellow';
  list[2].style.backgroundColor = 'pink';

  //DOM 생성
  let newList = document.createElement('li');
    //<li>라는 태그를 만들어줌 -->  <li>Mango<li>
   newList.innerHTML='Mango';
   newList.style.backgroundColor = 'orange';
   console.log(newList);
  //ul 하위요소 <li>Mango<li>
  let ulTag = document.querySelector('ul');
  ulTag.appendChild(newList); //append > 붙이다

}); //이벤트를 등록하겠다.

