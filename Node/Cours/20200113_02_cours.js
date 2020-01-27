'use strict';

/**
 * Exemple de factorisation de code de serveur
 */

const fs = require('fs');
const url = require('url');
const http = require('http');
const path = require('path');

const server = http.createServer();

const app = {
  server: server,
  mimeType: {
    ".html": "text/html;charset=utf8",
    ".txt": "text/plain;charset=utf8",
  },
  getMimeType: function(ext) {
    if (this.mimeType[ext]) {
      return this.mimeType[ext];
    } else {
      return this.mimeType['.txt'];
    }
  },
  sendResponse: function(code, mime, body) {
    this.response.writeHead(code, {
      "Content-Length": body.length,
      "Content-Type": mime
    });

    this.response.write(body, () => {
      this.response.end();
    });
  },
  send404: function() {
    const code = 404;
    const mime = this.getMimeType('.txt');
    const body = Buffer.from(`Error 404 : File not found`);

    this.sendResponse(code, mime, body);
  },
  sendFile: function(filename) {
    fs.readFile(path.normalize(filename), (error, data) => {
      if( error ) {
        return this.send404();
      } else {
        const code = 200;
        const body = data;
        const mime = this.getMimeType(path.extname(filename));
        return this.sendResponse(code, mime, body);
      }
    });
  },
  use: function(pathname, callback) {
    this.server.on('request', (request, response) => {
      const self = Object.create(this);
      self.request = request;
      self.response = response;
      if ( ! self.response.writableEnded ) {
        self.parsedURL = url.parse(request.url);
        if (pathname === self.parsedURL.pathname) {
          callback.call(self, self.request, self.response);
        }
      }
    });
  }
};


app.use('/', function(request, response) {
  const body = Buffer.from('corps de réponse');
  this.sendResponse(200, this.getMimeType('.txt'), body);
});

app.use('/accueil.html', function(request, response) {
  this.sendFile(`${__dirname}/${this.parsedURL.pathname}`);
});

app.use('/bonjourx.html', function(request, response) {
  this.sendFile(`${__dirname}/${this.parsedURL.pathname}`);
});

server.listen(8080, function() {
  console.log(`Server listening on 8080`);
});

