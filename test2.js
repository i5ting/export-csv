var export_csv = require('.')

var data = [
  { a: 1, b: 2 },
  { a: 2, b: 2 },
  { a: 3, b: 2 }
]
export_csv(data, 'test2.csv', function (item) {
  return item;
}, function () {
  console.log('end...');
}, true)