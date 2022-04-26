// dom/practice1

//컨텐츠가 다 실행하고 난 다음에 이벤트! 
document.addEventListener('DOMContentLoaded', function () {

  let menus = ['아이스 아메리카노', '카페라떼', '레몬에이드']

  let ulTag = document.createElement('ul')

  //배열쓰면 코드 간단해짐.
  for (let i = 0; i < menus.length; i++) {
    let liTag = document.createElement('li');
    liTag.innerHTML = menus[i];
    ulTag.appendChild(liTag)
  }

  menus.forEach(function(me,idx) {
    let liTag = document.createElement('li');
    liTag.innerHTML=me;
    ulTag.appendChild(liTag)
  });

  // let liTag = document.createElement('li');

  // //아메리카노
  // liTag.innerHTML='아이스 아메리카노'
  // ulTag.appendChild(liTag)

  // //카페라떼
  // liTag = document.createElement('li');
  // liTag.innerHTML='카페라떼'
  // ulTag.appendChild(liTag)

  // //레몬에이드
  // liTag = document.createElement('li');
  // liTag.innerHTML='레몬에이드'
  // ulTag.appendChild(liTag)

  // console.log(ulTag)  

  //
  let dd = document.getElementById('show')
  dd.appendChild(ulTag)


})