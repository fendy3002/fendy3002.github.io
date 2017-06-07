var express = require('express');
var app = express();
import fs from 'fs';

app.use(express.static(__dirname));

app.listen(3000, function () {
  console.log('String tools app listening on port 3000!')
});
