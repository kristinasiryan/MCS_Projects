let crypto = [  
{    
name : "Bitcoin",    
price: 1388.37  
},  
{    
name : "Ethereum",    
price: 716  
},  
{    
name : "Litecoin",    
price: 140  
}
]

const p=document.querySelectorAll('p');
const div=document.querySelectorAll('div');

for (t=0; t<3; t++) {
	p[t].innerHTML+=crypto[t].name+'<br>'+crypto[t].price;
	div[t].style.backgroundColor='rgb(255,'+(t*150)+',0)';
	div[t].style.width=crypto[t].price +'px';
}
