//2. random number

var max = 100
    var arr = [];
    for (let i = 0; i < max; i++) {
      var x = Math.floor((Math.random() * (max)) + 1);
      arr.push(x);
    }
    console.log(arr);
