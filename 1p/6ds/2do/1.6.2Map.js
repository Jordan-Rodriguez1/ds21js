// 2. Map

var time=[];
const map =new Map();
var prom=0;
function nom()
{
    for(var i=0;i<7;i++)
    {
        star = performance.now();
        for(var j=0;j<100000;j++)
        {
            var number= Math.floor(Math.random()*100000)
            map.set(j,"Name"+number)
        }
        end = performance.now();
        time = end-star;
        prom += time;
    }
    prom = prom/7;
    console.log(map);
    console.log("Promedio: " + prom);
}
console.log(nom())