var express = require('express');
var path = require('path');
const app = express();
app.set('view engine', 'html');
app.set('views', __dirname + '../client');
app.use('/', express.static(path.join(__dirname, '../client')));

app.listen(7070,function(){
	console.log("Connected...");
});