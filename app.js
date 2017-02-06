var express = require('express');
var app = express();

app.use(express.static(__dirname + '/htmlfiles', {
    index: 'home.html'
}));

app.listen(3000, () => {
	console.log('Web Server is running on port 3000')
});