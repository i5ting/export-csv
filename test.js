var export_csv = require('.')

var data = [
  {a:1,b:2},
  {a:2,b:2},
  {a:3,b:2}
]
export_csv(data, 'test1.csv')