const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

http
  .createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Erro ao carregar index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content);
    });
  })
  .listen(PORT, '0.0.0.0', () => {
    console.log(`[CLIENTE] Frontend ativo na porta ${PORT}`);
  });
