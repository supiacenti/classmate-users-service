# 🔐 Auth Service — ClassMate

> Microsserviço responsável por autenticação de usuários (login, cadastro e emissão de JWT).

---

## 🚀 Como rodar

```bash
npm install
cp .env.example .env
npm run dev
```

## ⚙️ Variáveis de Ambiente

```
PORT=5003
JWT_SECRET=algumasecretkeyfortoken
```

## 🧪 Rotas da API

### GET /users
Lista todos os usuários

### GET /users/:id
Busca usuário por ID

### POST /users
Cria novo usuário

### PUT /users/:id
Atualiza usuário

### DELETE /users/:id
Remove usuário

## 🐳 Docker

```
docker build -t classmate-users-service .
docker run -p 5003:5003 classmate-users-service
```

## 📦 Estrutura

``` css
src/
├── controllers/
├── routes/
├── services/
├── models/
├── middlewares/
└── index.ts
```

## 🛡️ Autenticação

As rotas protegidas usam JWT. Para acessar, envie:

``` makefile
Authorization: Bearer <seu_token_jwt>
```

## 🧰 Scripts

```
npm run dev    # modo desenvolvimento
npm run build  # compilar TS
npm start      # iniciar serviço buildado
```