var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello whatever!');
});

app.get('/nickname', function(request, response){
    response.send("Hello, I'm sleepycoder. Keeping sleepy, never sleeping. Having money is so renxing, Yeah!");
});

app.listen(process.env.PORT || 4000);
