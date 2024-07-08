export var c = console.log.bind(document);

let numbers = [2, 5, 6, 3];

c(numbers.length);
console.table(numbers);

c('ACCEDER POR POCISION');
c('acceder al elemento 1 con valor: ' + numbers[0]);
c('acceder al ultimo elemento con valor: ' + numbers[numbers.length - 1]);
c('NO ENCUENTRA POSICIONES NEGATIVAS');
c('acceder al ultimo elemento con valor: ' + numbers[-1]);

c('FUNCION AT PERMITE REFERENCIAS NEGATIVAS');
c('acceder al ultimo elemento con valor: ' + numbers.at(-1));
