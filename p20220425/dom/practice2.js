
document.addEventListener('DOMContentLoaded',function() {
let divTag = document.createElement('div')
let spanName=document.createElement('span')
spanName.setAttribute('id', 'name')
// spanName.innerHTML='홍길동' <span>홍길동</span>
let name=document.createTextNode('홍길동')
spanName.appendChild(name); //<span>홍길동</span.

let spanAge=document.createElement('span')
spanName.setAttribute('class', 'age') //attribute 노드추가

// spanAge.innerHTML='20' //<span>20</span>
let age = document.createTextNode('20살')
spanAge.appendChild(age) //<span>20살</span.

let hypen = document.createTextNode(' - ')

divTag.appendChild(spanName);
divTag.appendChild(hypen);
divTag.appendChild(spanAge);

let dd = document.getElementById('show').appendChild(divTag)

})



// let names = ['홍길동']
// let age = ['20']


