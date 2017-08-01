
var express = require('express');
const http  = require('http');
const path  = require('path');
const fs    = require('fs');
const app = express();
app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('assets', express.static(path.join(__dirname, 'src/assets')))
app.get('*', (req,res)=>{
    if(fs.existsSync(path.join(__dirname, 'dist'))){
           res.sendFile(path.join(__dirname, 'dist/index.html'));
    }
    else{
                  res.sendFile(path.join(__dirname, 'server_error.html'));
    }
   
    
});

const port = process.env.port | 2000;
const server = http.createServer(app);
server.listen(port, ()=> console.log("Port Listening"));