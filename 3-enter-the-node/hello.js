var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get("/greet/:name", function(req,res)) {
  var name = req.params.name;
  res.send("<hi>Hi, $(name)!")
}
app.use('/static', express.static('public'));

app.listen(3000, function () {
  console.log("it's working m8");
});
