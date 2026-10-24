const http = require('http');
const PORT = 8080;

// Libera apenas a origem do frontend, preservando o suporte ao Codespaces.
// Em ambiente local, o cliente roda em http://localhost:3000.
const ORIGEM_CLIENTE =
  process.env.CORS_FRONTEND_ORIGIN ||
  (process.env.CODESPACE_NAME
    ? `https://${process.env.CODESPACE_NAME}-3000.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN || 'app.github.dev'}`
    : 'http://localhost:3000');

http.createServer((req, res) => {
  // Entrega 3 - autoriza o preflight do navegador por 60 segundos.
  if (req.method === 'OPTIONS' && req.url === '/dados') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': ORIGEM_CLIENTE,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Identificador-Estudante, Content-Type',
      'Access-Control-Max-Age': '60'
    });
    res.end(); // HTTP 204 não pode ter corpo.
    return;
  }

  // A resposta final também precisa liberar a leitura pela origem do cliente.
  if (req.method === 'GET' && req.url === '/dados') {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': ORIGEM_CLIENTE
    });
    res.end(JSON.stringify({
      matricula: '2026107781',
      status: 'dados_sensiveis'
    }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ erro: 'Nao encontrado' }));
}).listen(PORT, '0.0.0.0', () => {
  console.log(`[API] Servidor ativo na porta ${PORT}`);
  console.log(`[API] Origem permitida: ${ORIGEM_CLIENTE}`);
});
