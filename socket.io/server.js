    var express = require('express'),  
        sio = require('socket.io'),  
        fs=require('fs'),  
        path = require('path')  
        url = require('url');  
      

    var app = module.export = express.createServer();  

    var io = sio.listen(app);  

    io.configure(function () {  

    });  

    io.sockets.on('connection', function (socket){  
        //公共信息  
        socket.on('public message',function(msg, fn){  
            socket.broadcast.emit('public message',msg);  
            fn(true);  
        });  
      
   
        socket.on('disconnect', function(){  
            socket.broadcast.emit('public message','</pre> 
    <span style="color: red;">???接。。。</span> 
    <pre class="javascript">');  
        });  
      
    });  
      
    app.listen(3000, function(){  
        var addr = app.address();  
        console.log('app listening on http://127.0.0.1：' + addr.port);  
    });  