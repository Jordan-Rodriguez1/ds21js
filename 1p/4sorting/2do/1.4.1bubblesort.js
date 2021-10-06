    //1. bubblesort

    var d = 10000;
    var arr = [];
    for (let i = 0; i < d; i++) {
      var x = Math.floor((Math.random() * (d)) + 1);
      arr.push(x);
    }

        var  lista =  arr;
        var n, i, k, aux;
        var pasos = 0;
        n = lista.length;
        console.log(lista);
        console.time('loop');
        for (k = 1; k < n; k++) {
            for (i = 0; i < (n - k); i++) {
                if (lista[i] > lista[i + 1]) {
                    aux = lista[i];
                    lista[i] = lista[i + 1];
                    lista[i + 1] = aux;
                    pasos = pasos + 1;
                }
            }
        }
    console.timeEnd('loop');
    console.log(pasos);
    console.log(lista);
    

  