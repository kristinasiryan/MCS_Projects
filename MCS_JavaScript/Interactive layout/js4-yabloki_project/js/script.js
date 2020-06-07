
const body=document.body;

	d=prompt('Сколько у вас денег?');
	y=prompt('Сколько вы купили яблок?');
	x=prompt('Сколько вы купили батонов хлеба?');
	s=prompt('Сколько стоит одно яблоко?');
	k=prompt('Сколько стоит один батон хлеба?');
	m=parseInt(y)*parseInt(s);
	t=parseInt(x)*parseInt(k);
	f=parseInt(d)>parseInt(m)+parseInt(t);

function haveEnough(d, y, x, s, k, m, t, f) {
	if(f==true) {
	body.innerHTML='Вам хватает денег на покупки';
	console.log('Вам хватает денег на покупки');
	} else {
	body.innerHTML='Вам не хватает денег на покупки';
	console.log('Вам не хватает денег на покупки');
	};
}

haveEnough(d, y, x, s, k, m, t, f);
