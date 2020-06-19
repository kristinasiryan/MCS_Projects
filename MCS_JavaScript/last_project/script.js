
window.onload = () => {
  console.log('page is fully loaded');
};

const city = 'Moscow';
console.log(city);
const API = '9236af38cf3940a58e280994050a0043';
const url = 'https://api.weatherbit.io/v2.0/current?city='+city+'&key='+API;
let xhr= new XMLHttpRequest();

xhr.open('GET', url, false);
xhr.send();
if(xhr.status !=200) {
	console.log(xhr.status +' '+xhr.statusText);
} else {
	var DATA = JSON.parse(xhr.responseText);
}

const form=document.forms[0];
console.log(form[0]);


class Person {
	constructor (name) {
		this.name=name;
		this.happiness=0;
	}
	hasCat() {
		this.happiness++
		return this.happiness
	}
	hasRest() {
		this.happiness++
		return this.happiness
	}
	hasMoney() {
		this.happiness++
		return this.happiness
	}
	isSunny() {
		console.log(DATA.data[0].temp);
		if (DATA.data[0].temp>15) {
			this.happiness++
			console.log(this.happiness);
		} else {
			console.log(this.happiness);
		}
	}
}


form.onsubmit = function(e) {
		e.preventDefault();
		var n=form[1];
		var m=form[2];
		var l=form[3];
		var k=form[4];
		var p=form[5];
		var u=form[6];

		var name=form[0].value;
		var Individual=new Person(name);
		console.log(Individual.happiness);

		if (n.checked && l.checked  && p.checked ) {
			console.log(Individual.hasCat(), Individual.hasRest(), Individual.hasMoney());
		} else if (m.checked  && l.checked && p.checked ) {
			console.log(Individual.hasRest(), Individual.hasMoney());
		} else if (n.checked  && k.checked && p.checked) {
			console.log(Individual.hasCat(), Individual.hasMoney());
		} else if (n.checked  && l.checked && u.checked) {
			console.log(Individual.hasCat(), Individual.hasRest());
		} else if (m.checked && k.checked && p.checked) {
			console.log(Individual.hasMoney());
		} else if (m.checked && l.checked && u.checked) {
			console.log(Individual.hasRest());
		} else if (n.checked && k.checked && u.checked) {
			console.log(Individual.hasMoney());
		} else {
			console.log(Individual.happiness);
		}

		Individual.isSunny();


		var person=document.querySelector('.personName');
		var icon=document.querySelector('.icon');

		person.innerHTML = Individual.name +':';
		if (Individual.happiness=='4') {
			icon.innerHTML='😁';
		} else if (Individual.happiness=='2' || Individual.happiness=='3') {
			icon.innerHTML='😐';
		} else {
			icon.innerHTML='☹️'
		}

		if (window.history.replaceState) {
 		window.history.replaceState(null, null, window.location.href);
 	}
}