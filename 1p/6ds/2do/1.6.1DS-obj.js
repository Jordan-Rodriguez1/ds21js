// 1. DS-obj

var time=[];
let obj={};
var prom=0;
function nom()
{
    for(var i=0;i<7;i++)
    {
        star=performance.now();
        for(var j=0;j<100000;j++)
        {
            var number= Math.floor(Math.random()*100000)
            const add    = (key, value) => obj[key] = value
            add(j,"Name"+number)
        }
        end=performance.now();
        time= end-star;
        prom+= time;
    }
    prom = prom/7;
    console.log(obj);
    console.log("Promedio: " + prom);
}
console.log(nom())