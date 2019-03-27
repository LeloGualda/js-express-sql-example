const express = require('express');
const app = express();

require('./')(app); 
app.set('port', 8080);
app.listen(app.get('port'), function() {
    console.log('Node App Started');
});