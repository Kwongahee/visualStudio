// dom/practice4.js

document.addEventListener('DOMContentLoaded', function () {

  //id선택 > #
  let showDiv = document.querySelector('#show')
  showDiv.style.width = '300px';
  showDiv.style.height = '300px';
  showDiv.style.backgroundColor = 'green';

  let inputTag = document.getElementById('userName')
  inputTag.addEventListener('change', function () {
    let span = document.createElement('span')
    span.style.display = 'inline-block';
    span.style.paddingLeft = '2px';
    span.style.paddingRight = '2px';
    span.style.marginLeft = '2px';
    span.style.marginRight = '2px';

    span.style.backgroundColor = 'pink'
    span.style.color = 'white'
    span.innerHTML = document.querySelector('#userName').value;
    showDiv.appendChild(span);


    document.querySelector('#userName').value = '';
  });

  let add = document.querySelector('#addBtn');
  add.addEventListener('click', function () {
    let span = document.createElement('span')
    span.style.display = 'inline-block';
    span.style.paddingLeft = '2px';
    span.style.paddingRight = '2px';
    span.style.marginLeft = '2px';
    span.style.marginRight = '2px';

    span.style.backgroundColor = 'pink'
    span.style.color = 'white'
    span.innerHTML = document.querySelector('#userName').value;
    showDiv.appendChild(span);


    document.querySelector('#userName').value = '';
  })

})