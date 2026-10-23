const http = require('http');
const PORT = 8080;

// Autoriza UMA origem exata, nunca o curinga '*':
// no Codespaces, usa a URL HTTPS da porta 3000; localmente, localhost:3000.
// Se preciso, defina CORS_FRONTEND_ORIGIN com a URL exata do cliente.
const ORIGEM_CLIENTE =
  process.env.CORS_FRONTEND_ORIGIN ||
  (process.env.CODESPACE_NAME
    ? `https://${process.env.CODESPACE_NAME}-3000.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN || 'app.github.dev'}`
    : 'http://localhost:3000');

http.createServer((req, res) => {
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

  // Intencionalmente nao implementamos OPTIONS /dados.
  // A etapa 2 pede que o preflight falhe com 404.
  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ erro: 'Nao encontrado' }));
}).listen(PORT, '0.0.0.0', () => {
  console.log(`[API] Servidor ativo na porta ${PORT}`);
  console.log(`[API] Origem permitida: ${ORIGEM_CLIENTE}`);
});
