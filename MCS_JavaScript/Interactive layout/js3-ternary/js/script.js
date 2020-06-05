
const number=document.querySelector('.number')
let answer=prompt('Введите число');
answer=parseInt(answer);

(answer>=0) ? number.innerHTML=answer : number.innerHTML= Math.abs(answer);