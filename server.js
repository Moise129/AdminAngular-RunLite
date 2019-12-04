const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/Admin-Run-lite'));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/Admin-Run-lite/index.html'));
});

app.listen(process.env.PORT || 3000);

  
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/buscadorFrontAngular'));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/buscadorFrontAngular/index.html'));
});

app.listen(process.env.PORT || 3000);