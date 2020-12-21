const express = require('express');
const path = require('path');
const app = require();


app.use(express.static(__dirname + '/dist/app-route'));

app.get('/*', function(req, res){
    res.sendfile(path.join(__dirname + '/dist/app-route/index.html'));

});


app.listen(process.env.PORT || 3000);