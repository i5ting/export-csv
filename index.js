#!/usr/bin/env node

var csv = require('fast-csv')
  , fs = require('fs');

module.exports = function (data_arr, file, finish_cb, is_headers) {
  _is_headers = false;
  _finish_cb = function(){
    
  };
  
  if (finish_cb) {
    _finish_cb = finish_cb;
  }
  
  if (is_headers) {
    _is_headers = is_headers;
  }

  var out = fs.createWriteStream(file)
  var csvStream = csv.createWriteStream({ headers: _is_headers })
  csvStream.pipe(out);

  out.on("finish", function () {
    console.log("DONE!");
    _finish_cb();
  });

  data_arr.forEach(function (item) {
    csvStream.write(item);
  })

  csvStream.end();

  return csvStream;
}