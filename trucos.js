export var c = console.log.bind(document);

function printData(param1, param2) {
  var name = param1 || 'Jhon';
  var age = param2 || 30;

  c('name', name);
  c('age', age);
}

printData();
