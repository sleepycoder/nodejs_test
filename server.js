var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello whatever!');
});

app.get('/nickname', function(request, response){
    response.send("Hello, I'm sleepycoder. Never sleeping, only sleepy. Having money is so renxing, Yeah!");
});

app.listen(process.env.PORT || 4000);
