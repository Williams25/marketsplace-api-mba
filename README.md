# Marketplace API 🚀

API RESTful para gestão de vendas de produtos, desenvolvida com **Node.js**, **NestJS**, **Prisma**, **JWT** e **Bcrypt**. Projeto parte do desafio do MBA da Rocketseat.

---

## ✅ Funcionalidades Implementadas

- [x] Deve ser possível cadastrar novos usuários
  - [x] Deve ser feito o hash da senha do usuário
  - [x] Não deve ser possível cadastrar usuário com e-mail duplicado
  - [x] Não deve ser possível cadastrar usuário com telefone duplicado
- [x] Deve ser possível atualizar os dados do usuário
  - [x] Deve ser feito o hash da senha do usuário
  - [x] Não deve ser possível atualizar para um e-mail duplicado
  - [x] Não deve ser possível atualizar para um telefone duplicado
- [x] Deve ser possível obter o token de autenticação
  - [x] Não deve ser possível se autenticar com credenciais incorretas
- [x] Deve ser possível realizar o upload de arquivos
- [x] Deve ser possível criar e editar um Produto
  - [x] Deve ser possível armazenar o valor do produto em centavos
  - [x] Não deve ser possível criar/editar um Produto com um usuário inexistente
  - [x] Não deve ser possível criar/editar um Produto com uma categoria inexistente
  - [x] Não deve ser possível criar/editar um Produto com imagens inexistentes
  - [x] Não deve ser possível editar um Produto inexistente
  - [x] Não deve ser possível alterar um Produto de outro usuário
  - [x] Não deve ser possível editar um Produto já vendido
- [x] Deve ser possível obter dados de um Produto
  - [x] Qualquer usuário deve poder obter dados do Produto
- [x] Deve ser possível listar todas as categorias
  - [x] Qualquer usuário deve poder obter a lista de categorias
- [x] Deve ser possível listar todos os produtos por ordem de criação (mais recente)
  - [x] Qualquer usuário deve poder obter a lista de produtos
  - [x] Deve ser possível realizar paginação pela lista de produtos
  - [x] Deve ser possível filtrar pelo Status
  - [x] Deve ser possível buscar pelo título ou pela descrição do produto
- [x] Deve ser possível listar todos os produtos de um usuário
  - [x] Não deve ser possível listar os produtos de um usuário inexistente
  - [x] Deve ser possível filtrar pelo Status
  - [x] Deve ser possível buscar pelo título ou pela descrição do produto
- [x] Deve ser possível alterar o Status do Produto
  - [x] Não deve ser possível alterar o Status de um Produto com um usuário inexistente
  - [x] Não deve ser possível alterar o Status de um Produto inexistente
  - [x] Não deve ser possível alterar o Status de um Produto de outro usuário
  - [x] Não deve ser possível marcar como Cancelado um Produto já Vendido
  - [x] Não deve ser possível marcar como Vendido um Produto Cancelado
- [x] Deve ser possível obter informações do perfil de um usuário
  - [x] Não deve ser possível obter informações do perfil de um usuário inexistente
  - [x] Não deve ser possível obter a senha do usuário
- [x] Deve ser possível registrar uma visualização em um produto
  - [x] Não deve ser possível registrar uma visualização em um produto inexistente
  - [x] Não deve ser possível registrar uma visualização de um usuário inexistente
  - [x] Não deve ser possível registrar uma visualização do próprio dono do produto
  - [x] Não deve ser possível registrar uma visualização duplicada
- [x] Métricas
  - [x] Não deve ser possível obter métricas de usuários inexistentes
  - [x] Deve ser possível obter a métrica de produtos vendidos nos últimos 30 dias
  - [x] Deve ser possível obter a métrica de produtos disponíveis nos últimos 30 dias
  - [x] Deve ser possível obter a métrica de visualizações nos últimos 30 dias
  - [x] Deve ser possível obter a métrica de visualizações por dia dos últimos 30 dias
  - [x] Deve ser possível obter a métrica de visualizações de um produto nos últimos 7 dias

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **NestJS** – Framework Node.js modular e escalável
- **Prisma** – ORM para interação com o banco de dados
- **Zod** – Validação de dados em tempo de execução
- **JWT** – Autenticação via tokens
- **Bcrypt** – Hash de senhas
- **Cookie Parser** – Leitura de cookies para autenticação segura
- **CORS** – Habilitado para integração com frontend

---

## 🔐 Autenticação

- Autenticação via **JWT**
- Token enviado no **cookie HTTP-only** para maior segurança
- Extração do token via `cookies` no `AuthGuard`
- Refresh de sessão e proteção contra XSS
