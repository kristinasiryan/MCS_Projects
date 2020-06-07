
const body=document.body;

	let d=prompt('Сколько у вас денег?');
	let y=prompt('Сколько вы купили яблок?');
	let x=prompt('Сколько вы купили батонов хлеба?');
	let s=prompt('Сколько стоит одно яблоко?');
	let k=prompt('Сколько стоит один батон хлеба?');
	let m=parseInt(y)*parseInt(s);
	let t=parseInt(x)*parseInt(k);
	let f=parseInt(d)>parseInt(m)+parseInt(t);

function haveEnough(f) {
	if(f===true) {
	body.innerHTML='Вам хватает денег на покупки';
	console.log('Вам хватает денег на покупки');
	} else {
	body.innerHTML='Вам не хватает денег на покупки';
	console.log('Вам не хватает денег на покупки');
	};
}

haveEnough(f);
