var c = console.log.bind(document);
var ct = console.table.bind(document);

let numbers = [2, 5, 6, 3, 10, 6, 7];

ct(numbers);

for (let i = 0; i < numbers.length; i++) {
  c(numbers[i]);
}

for (let i = numbers.length - 1; i >= 0; i--) {
  c(numbers[i]);
}
