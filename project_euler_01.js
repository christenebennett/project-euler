let i;
let multiples = [];

for (i = 0; i < 1000; i++) {
	if (i % 3 == 0 || i % 5 == 0) {
		multiples.push(i);
	};
};
let sum = multiples.reduce(function(a, b) {
	return a + b;
});
console.log(sum);
