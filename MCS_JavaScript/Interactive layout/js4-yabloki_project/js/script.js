
const body=document.body;

function haveEnough(d, y, x, s, k, m, t, f) {
	if(f==true) {
	body.innerHTML='Вам хватает денег на покупки';
	console.log('Вам хватает денег на покупки');
	} else {
	body.innerHTML='Вам не хватает денег на покупки';
	console.log('Вам не хватает денег на покупки');
	};
}

haveEnough(prompt('Сколько у вас денег?'), prompt('Сколько вы купили яблок?'), prompt('Сколько вы купили батонов хлеба?'), prompt('Сколько стоит одно яблоко?'), prompt('Сколько стоит один батон хлеба?'), parseInt(y)*parseInt(s), parseInt(x)*parseInt(k), parseInt(d)>parseInt(m)+parseInt(t));
