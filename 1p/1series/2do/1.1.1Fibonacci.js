//1. Fibonacci

var limit = 10;
var fibo = [0,1];

for(i=2; i <= limit; i++){
    fibo.push(fibo[i-1] + fibo[i-2]);
    console.log(fibo[i]);	
}