// document.addEventListener('DOMContentLoaded',function(){
//   //테이블 생성
//   let tableTag = document.createElement('table')
//   //thead 생성
//   let thead = document.createElement('thead')

//   let tr=document.createElement('tr')
//   let tbody = document.createElement('tbody')
//   let thName=document.createElement('th')
//   thName.setAttribute('id','101')

//   let tdName=document.createElement('td')
//   let name=document.createTextNode('홍길동')

//   let tdAge=document.createElement('td')
//   let Age=document.createTextNode('20')


//   tdName.appendChild(name)
//   tdAge.appendChild(Age)

//   let thAge=document.createElement('th')
//   thAge.setAttribute('id','102')

//   tdName=document.createElement('td')
//   name=document.createTextNode('김길동')

//   tdAge=document.createElement('td')
//   Age=document.createTextNode('23')

//   tdName.appendChild(name)
//   tdAge.appendChild(Age)

//   tableTag.appendChild(thName)


//   let dd = document.getElementById('show').appendChild(table)
// })
let data = [{
  id: 101,
  name: '홍길동',
  age: 20
}, {
  id: 102,
  name: '김길동',
  age: 22
}, {
  id: 103,
  name: '가희',
  age: 25
}];

document.addEventListener('DOMContentLoaded', callbackFnc);

function callbackFnc() {
  console.log(window)  // 윈도우 하위요소 볼 수 있음
  //하위요소0 > html , html의 하위요소 1 > body , children 0 > h3
  window.document.children[0].children[1].children[0].innerHTML='요깅'
  //사용하는 변수선언.
  // let h3=window.document.children[0].chileren[1].children[0]
  // let newH3 = document.createElement('h3')
  // newH3.innerHTML='안녕'
  // h3.parentElement.appendChild()

  let table, thead, tbody, tr, td, text;

  //table 생성.
  table = document.createElement('table') //<table>
  table.setAttribute('border', 1) // <table border>

  //thead에 하위요소를 작성한 다음 table 하위요소로 추가
  thead = makeHead();
  table.appendChild(thead)

  tbody = makeBody(data);
  table.appendChild(tbody)

  //show 요소의 하위 table append.
  document.getElementById('show').appendChild(table)

  //추가 버튼 이벤트.
  let btn = document.querySelector('button')
  btn.addEventListener('click', function(){
    let obj = {}
    let userName= document.getElementById('userName').value
    obj.name=userName
    let userAge =document.getElementById('userAge').value
    obj.age=userAge
    obj.id=110;

    document.querySelector('table>tbody').appendChild(makeTr(obj))
  })
}

function makeHead() {
  //thead 생성
  let thead = document.createElement('thead')

  let tr = document.createElement('tr')
  let td = document.createElement('th')
  let text = document.createTextNode('이름')
  td.appendChild(text); // <td>이름<td>
  tr.appendChild(td); // <tr><td>이름</td></tr>

  td = document.createElement('th')
  text = document.createTextNode('나이');
  td.appendChild(text); // <td>나이<td>
  tr.appendChild(td); // <tr><td>이름</td><td>나이<td></tr>

  td = document.createElement('th')
  text = document.createTextNode('기능');
  td.appendChild(text); // <td>나이<td>
  tr.appendChild(td); // <tr><td>이름</td><td>나이<td></tr>

  thead.appendChild(tr); // <thead><tr><td>이름</td><td>나이<td></tr></thead>

  return thead;
}

function makeBody(objAry) {

  //[{},{},{},{}]
  //tbody 생성
  let tbody = document.createElement('tbody')

  //데이터영역만 반복될수있게..forEach
  objAry.forEach(function (val) {
    // obj => {name:'' , age:}
    tbody.appendChild(makeTr(val));

    // tbody.appendChild(tr);
  });

  return tbody;
}

function makeTr(val) {
  let fields = ['name', 'age']

  //첫번째 라인
  let tr = document.createElement('tr')
  tr.setAttribute('id', val.id)


  //name, age 필드 > 갯수만큼 td생성
  fields.forEach(function (field) {
    let td = document.createElement('td')
    let text = document.createTextNode(val[field] + `${field=="age"?"살":"님"}`)
    td.appendChild(text); // <td>홍길동</td>
    tr.appendChild(td); //<tr><td>홍길동</td></tr>

  })

  let btn = document.createElement('button')// <button>삭제</button>
  btn.innerHTML = '삭제' ;
  let td = document.createElement('td')
  // btn.addEventListener('click', deleteCallBack){
    // console.log(this) //이벤트를 당하는 대상..> this : event.target
    // this.parentElement.parentElement.remove();
    //   evnt.target.parentElement.parentElement.remove() //중요!!!!!!
  // });
  let id = document.createElement('td')
  td.appendChild(btn)
  tr.appendChild(td);

  return tr;
}

function deleteCallBack(){
  
  console.log(this) //이벤트를 당하는 대상..> this : event.target
  this.parentElement.parentElement.remove();
    // evnt.target.parentElement.parentElement.remove() //중요!!!!!!
}