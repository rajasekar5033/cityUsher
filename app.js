
var express = require('express');
const http  = require('http');
const path  = require('path');
const app = express();
app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('assets', express.static(path.join(__dirname, 'src/assets')))
app.get('*', (req,res)=>{

           res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '2000';
const server = http.createServer(app);
server.listen(port, ()=> console.log("Port Listening"));
