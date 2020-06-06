
const number=document.querySelector('.number')
let answer=prompt('Введите число');
answer=parseInt(answer);

if(answer>=0) {
	number.innerHTML=answer;
} else {
	number.innerHTML= Number(answer); //or Math.abs(answer)
}
