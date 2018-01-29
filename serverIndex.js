var http = require('http');
var fs = require('fs');
var path = require('path');

  var server = http.createServer(function(request, response){
      fs.readFile(__dirname + '/index.html', function(err, html){           
            var filePath = request.url;
            if (filePath == '/')
            filePath = '/index.html';

            filePath = __dirname+filePath;
            var extname = path.extname(filePath);
            var contentType = 'text/html';

            switch (extname) {
                case '.js':
                    contentType = 'text/javascript';
                    break;
                case '.css':
                    contentType = 'text/css';
                    break;
            }

            fs.exists(filePath, function(exists) {

                if (exists) {
                    fs.readFile(filePath, function(error, content) {
                        if (error) {
                            response.writeHead(500);
                            response.end(html);
                        }
                        else {                   
                            response.writeHead(200, { 'Content-Type': contentType });
                            response.end(content, 'utf-8');                  
                        }
                    });
                }
            });
      });
  });

  server.listen(3000, function(){
      console.log('Running Server')
  });
