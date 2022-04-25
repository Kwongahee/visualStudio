// object/practice2.js
// 달력만들기

// <table>
// <thead><tr><th></th>*항목갯수</tr></thead>
// <tbody><tr><td></td>*항목갯수</tr>*건수</tbody>
// </table>

let year = 2022;
let month = 4;

function showCalendar(year=2022,month=4) {
  let firstDay = getFirstDay(year, month); // 1일의 위치지정하기 위한 함수.
  let lastDate = getLastDate(year, month); // 해당월의 마지막날을 계산 함수.

  document.write('<table border=1><tr>')
  showDayinfo();
  //빈공간 작성.
  for (let i = 0; i < firstDay; i++) {
    document.write('<td ></td>');
  }
  // 날짜 화면 출력.
  for (let i = 1; i <= lastDate; i++) {
    if ((i + firstDay) % 7 == 0) { //토요일 
      document.write(`<td style="background:purple; color:white;">${i}</td>`);
    } else if ((i + firstDay) % 7 == 1) { //일요일
      document.write(`<td style="background:red">${i}</td>`);
    } else if ((i + firstDay) % 7 == 2) { //월요일
      document.write(`<td style="background:orange">${i}</td>`);
    } else if ((i + firstDay) % 7 == 3) { //화요일
      document.write(`<td style="background:yellow">${i}</td>`);
    } else if ((i + firstDay) % 7 == 4) { //수요일
      document.write(`<td style="background:green">${i}</td>`);
    } else if ((i + firstDay) % 7 == 5) { //목요일
      document.write(`<td style="background:skyblue">${i}</td>`);
    } else if ((i + firstDay) % 7 == 6) { //금요일
      document.write(`<td style="background:navy; color:white;">${i}</td>`);
    } else { //그외..
      document.write(`<td>${i}</td>`);
    }
    
    if ((i + firstDay) % 7 == 0) { //줄바꿈.
      document.write('</tr><tr>')
    }
  }
  document.write('</tr></table>')
}
showCalendar();


function showDayinfo() {
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  document.write('<thead><tr>')
  days.forEach(function (day) {
    document.write(`<th style="background:violet">${day}</th>`)
  })
  document.write('</tr></thead>');
}

function getLastDate(year, month) {
  //말일 정보를 가지고 오는 함수.
  switch (month) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;


  }
}

function getFirstDay(year, month) {
  switch (month) {
    case 1:
      return 7;
    case 2:
      return 3;
    case 3:
      return 3;
    case 4:
      return 6;
    case 5:
      return 0;
    case 6:
      return 4;
    case 7:
      return 6;
    case 8:
      return 2;
    case 9:
      return 5;
    case 10:
      return 7;
    case 11:
      return 3;
    case 12:
      return 5;

  }
}