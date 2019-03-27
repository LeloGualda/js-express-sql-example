const  express = require('express'),
app = express(), 
mysql = require('mysql'),
conSQLApi = require('./conectMysql');

app.use(express.static(__dirname + '/public/'));  /*  front end*/
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const port  = 8080

app.get('/', function(request, response,next) {
    conSQLApi.getData(request, response,next, request.params);
  });
  
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
