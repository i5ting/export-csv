var export_csv = require('.')

var data = [
  { a: 1, b: 2 },
  { a: 2, b: 2 },
  { a: 3, b: 2 }
]
export_csv(data, 'test3.csv', function (item) {
  for (var key in item) {
    item[key] = 'yy +' + item[key];
  }
  return item;
})