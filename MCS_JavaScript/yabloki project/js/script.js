let d=prompt('Сколько у вас денег?') 
let y=prompt('Сколько вы купили яблок?') 
let x=prompt('Сколько вы купили батонов хлеба?') 
let s=prompt('Сколько стоит одно яблоко?') 
let m=parseInt(y)*parseInt(s) 
let k=prompt('Сколько стоит один батон хлеба?') 
let t=parseInt(x)*parseInt(k)
let f=parseInt(d)>parseInt(m)+parseInt(t) 
console.log(f) 
