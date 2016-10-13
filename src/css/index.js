const fs = require('fs');
const path = require('path');
const options = {
  key: fs.readFileSync('.localhost-ssl/key.pem'),
  cert: fs.readFileSync('.localhost-ssl/cert.pem')
};

require('http2').createServer(options, function(request, response) {
  const filePath = path.join(__dirname, './index.html');
  const stat = fs.statSync(filePath);

  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': stat.size
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(response);

}).listen(8080);