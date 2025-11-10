ATIVIDADE PONTUADA 3
🎯 Objetivo
Em dupla, desenvolva um site para uma farmácia com front-end em ReactJS e back-end em Node.js, onde o formulário de Fale Conosco envia os dados para uma API que registra as informações em um banco MySQL.

🖥️ Escopo do Front-end (ReactJS)
Crie um SPA (Single Page Application) com as páginas abaixo e navegação por rotas:

Home
Banner/hero com nome da farmácia e CTA para “Serviços” e “Fale Conosco”.
Serviços
Lista de serviços (ex.: aferição de pressão, aplicação de injetáveis, testes rápidos etc.).
Sobre nós
Missão/visão/valores, história e horário de funcionamento.
Fale Conosco
Formulário com campos: nome, e-mail, telefone, mensagem.
Validações de preenchimento no cliente (ex.: e-mail válido, telefone com DDD, mensagem não vazia).
Ao enviar, chamar a API do back-end e exibir feedback de sucesso/erro ao usuário.
Requisitos mínimos do front-end
React 18+ (pode usar Vite/CRA), React Router para rotas, CSS responsivo.
Tratamento de estados de carregando, sucesso e erro no envio do formulário.
Sem bibliotecas de UI obrigatórias (livre escolha).
⚙️ Escopo do Back-end (Node.js)
Parte 1: API Fale Conosco
Implemente uma API com os seguintes requisitos:

Stack sugerida: Node 18+ com Express (ou similar).
Conexão MySQL: usar ferramenta para automatização.
CORS habilitado para permitir chamadas do front-end.
Endpoint obrigatório:
POST /api/contatos
Entrada (JSON):
{
  "nome": "string",
  "email": "string",
  "telefone": "string",
  "mensagem": "string"
}
Parte 2: API Clientes
Instruções
Crie um endpoint usando os dados enviados do formulário e salvar os dados de clientes:

/contatos
🛠️ Ferramentas
Utilize o banco de dados MySQL.
API backend com Node.js.
Utilize ferramentas de mapeamento objeto relacional como Sequelize.
Teste os endpoints com Insomnia ou Thunder Client.