
const body=document.body;

function haveEnough(d, y, x, s, m, k, t, f) {
	var d=prompt('Сколько у вас денег?');
	var y=prompt('Сколько вы купили яблок?');
	var x=prompt('Сколько вы купили батонов хлеба?');
	var s=prompt('Сколько стоит одно яблоко?');
	var m=parseInt(y)*parseInt(s);
	var k=prompt('Сколько стоит один батон хлеба?');
	var t=parseInt(x)*parseInt(k);
	var f=parseInt(d)>parseInt(m)+parseInt(t);
	console.log(f);

	if(f==true) {
	body.innerHTML='Вам хватает денег на покупки';
	console.log('Вам хватает денег на покупки');
	} else {
	body.innerHTML='Вам не хватает денег на покупки';
	console.log('Вам не хватает денег на покупки');
	}
}

haveEnough();