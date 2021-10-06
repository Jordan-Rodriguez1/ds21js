//1. sieve of Eratosthenes

	var Primos = [];
    var max = 100;

	for (var i = 0; i < max; i += 1) {
		if (i != 0 && i != 1) {
			Primos.push(true);
		}
		else {
			Primos.push(false);
		}
	}

	for (var i = 0; i < max; i += 1) {
		if (Primos[i]) {
			for (var j = i + i; j < max; j += i) {
				Primos[j] = false;
			}
		}
	}

	var primes = [];

	for (var i = 0; i < max; i += 1) {
		if (Primos[i]) {
			primes.push(i);
		}
	}

	console.log(primes);
