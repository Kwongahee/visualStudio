let data = [{
    studNo: 101,
    studName: '권가희',
    engScore: 90,
    korScore: 80
  },
  {
    studNo: 102,
    studName: '장도연',
    engScore: 88,
    korScore: 91
  },
  {
    studNo: 103,
    studName: '송은이',
    engScore: 92,
    korScore: 92
  },
  {
    studNo: 104,
    studName: '김숙',
    engScore: 92,
    korScore: 83
  }
];

//tbody 태그
let list = document.getElementById('list');



//초기화
//배열의 값, 위치(인덱스)값, 배열자체
data.forEach(function (elem, idx, ary) {
  list.appendChild(makeTr(elem))
});

//변경버튼 이벤트.
let changeBtn = document.querySelector('input[type="button"]')
changeBtn.addEventListener('click',function(e){
  //대상찾아오도록.
  let targetTr = document.querySelectorAll('#list>tr');
  console.log(targetTr)
  let sno = document.getElementById('sno').value;
  let sname = document.getElementById('sname').value;
  let eng = document.getElementById('eng').value;
  let kor = document.getElementById('kor').value;
  targetTr.forEach(function(tr) {
    console.log(tr);

    if(tr.children[0].innerHTML==sno) { //첫번째 td값(sno) 
      tr.children[2].innerHTML=eng; //영어점수변경
      tr.children[3].innerHTML=kor; //국어점수변경
    } 
  })
});

function changeCallBack1(e) {
  e.preventDefault(); //기본기능 차단
  // console.log('hhhh')
  let sno = document.getElementById('sno').value; //input태그의 value속성을 sno에 담음
  let sname = document.getElementById('sname').value; //2번째 td(이름)
  let eng = document.getElementById('eng').value;
  let kor =document.getElementById('kor').value;
  if(!(sno && sname && eng && kor)) {
    alert('값을 입력하세요 ^-^')
    return
  }
  // if(!sno){
  //   alert('변경할 아이디를 입력하세요 ^~^')
  //   return;
  // } else if(!sname){
  //   alert('변경할 이름을 입력하세요 o.o')
  //   return
  // } else if(!eng){
  //   alert('변경할 영어점수를 입력하세요 >_<')
  //   return
  // } else if(!kor){
  //   alert('변경할 국어점수를 입력하세요 ~_~')
  //   return
  // }

  let searchTr = document.getElementById(`s_${sno}`);
  searchTr.children[1].innerHTML = sname;
  searchTr.children[2].innerHTML = eng;
  searchTr.children[3].innerHTML = kor;
}

//student 한건 -> <tr><td>학번</td><td>이름</td><td>영어</td><td>국어</td></tr>
function makeTr(student) {
  let tr = document.createElement('tr');
  tr.setAttribute('id','s_' + student.studNo)
  tr.addEventListener('click', function (e) {
    // e.stopPropagation();
    console.log(this.children[1].innerHTML); //this가 tr자체.. this.children > tr의 하위요소 다 가져옴
    //this.children[0] > 첫번째 td값
    document.getElementById('sno').value = this.children[0].innerHTML
    document.getElementById('sname').value = this.children[1].innerHTML
    document.getElementById('eng').value = this.children[2].innerHTML
    document.getElementById('kor').value = this.children[3].innerHTML
  }, false) //true : 상위 => 하위.  디폴트값(false):하위 => 상위
  for (let field in student) {
    //student.studNo > 학생번호 값을 가져옴 =  student['studNo'] (이걸 더 많이씀)
    let td = document.createElement('td');
    td.innerHTML = student[field]; //4번 돈다.> 각각의 td를 만듬
    tr.appendChild(td); //만들어진 td를 tr에 붙인다.

  }
  // 버튼 : 삭제

  let btn = document.createElement('button')
  btn.innerHTML = '삭제'
  btn.addEventListener('click', function (e) {
    e.stopPropagation(); //이벤트 전파 차단
    console.log(this)
    e.target.parentElement.parentElement.remove();
  }, false);
  let td = document.createElement('td')
  td.appendChild(btn)
  tr.appendChild(td)

  return tr
}

//추가
let submitBtn = document.querySelector('input[type="submit"]')
submitBtn.addEventListener('click',function(e){
  e.preventDefault();
  let sno = document.getElementById('sno').value;
  let sname = document.getElementById('sname').value;
  let eng = document.getElementById('eng').value;
  let kor = document.getElementById('kor').value;

  let obj = {}
  obj.studNo = sno
  obj.studName = sname
  obj.engScore = eng
  obj.korScore = kor

  if(!(sno&&sname&&eng&&kor)){
    alert('값을 입력하세요.')
    return
  }

  console.log(obj)
  list.appendChild(makeTr(obj))
})