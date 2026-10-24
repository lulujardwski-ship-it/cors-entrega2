# CORS — Entrega 3

Matrícula: 2026107781

## Executar no Codespaces
Abra esta branch no Codespaces e execute, em dois terminais:

```bash
node api/server-api.js
node client/server-client.js
```

Na aba Ports, defina as portas **8080 e 3000 como Public**. Abra a URL HTTPS da porta 3000.

## Testes exigidos
1. Abra DevTools (F12) > Network, habilite a coluna **Method** e deixe **Disable cache** desmarcado.
2. No primeiro clique em **Executar Requisição**, confirme OPTIONS 204 + GET 200.
3. Sem recarregar, clique mais três vezes em menos de 60 segundos. Confirme apenas novos GET 200.
4. Salve captura real mostrando o JSON na página e a sequência na aba Network como **print-entrega3.png**.
5. Para o teste de fronteira, acrescente temporariamente `'X-Chave-Nao-Autorizada': 'teste'` ao objeto headers em `client/index.html` e atualize o navegador. O preflight deve impedir o GET. **Remova o cabeçalho inválido após testar**.

Para a entrega, compacte as pastas `api/` e `client/`, `respostas_tecnicas.txt` e a captura real `print-entrega3.png` no arquivo `Entrega3_2026107781.zip`.

**Observação:** testes de HTTP executados separadamente do navegador confirmam resposta OPTIONS 204, GET 200 e cabeçalhos. A evidência do cache na aba Network deve ser produzida no navegador do aluno.
