//2. selectionsort

var d = 10000;
var arr = [];
for (let i = 0; i < d; i++) {
  var x = Math.floor((Math.random() * (d)) + 1);
  arr.push(x);
}

var  lista =  arr;
var n = lista.length;
var pasos = 0;
console.log(lista);
console.time('loop');
for(let i = 0; i < n; i++) {
    let min = i;
    for(let j = i+1; j < n; j++){
        if(lista[j] < lista[min]) {
            min=j; 
            pasos = pasos + 1;
        }
     }
     if (min != i) {
         let tmp = lista[i]; 
         lista[i] = lista[min];
         lista[min] = tmp;      
    }
}
console.timeEnd('loop');
console.log(pasos);
console.log(lista);