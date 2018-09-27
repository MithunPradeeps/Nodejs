const express = require('express')
const app = express()

app.get('/',(request,response)=>{
    response.send('<!Doctype html><head>Mithun</head></html>');
})

app.listen(3000,(response)=>{
console.log('Running');
})