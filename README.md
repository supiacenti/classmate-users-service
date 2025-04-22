# 👥 Users Service — ClassMate

> Microsserviço responsável pelo gerenciamento de usuários (criação, listagem, atualização e remoção).

---

## Testes

![CI](https://github.com/supiacenti/classmate-users-service/actions/workflows/ci.yml/badge.svg)  
Cobertura: ![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)

---

## 🚀 Como rodar localmente

1. Instale as dependências: `npm install`  
2. Copie o arquivo de exemplo: `cp .env.example .env`  
3. Inicie em modo desenvolvimento: `npm run dev`

---

## ⚙️ Variáveis de Ambiente

```
PORT=5003
```

---

## 🧪 Rotas da API

### GET /users  
Lista todos os usuários

### GET /users/:id  
Busca um usuário por ID

### POST /users  
Cria um novo usuário  
Body:

```json
{
  "name": "Fulano",
  "email": "fulano@email.com",
  "role": "ADMIN"
}
```

### PUT /users/:id  
Atualiza um usuário existente  
Body:

```json
{
  "name": "Novo Nome",
  "email": "novo@email.com"
}
```

### DELETE /users/:id  
Remove um usuário

---

## 📦 Estrutura

```css
src/
├── controllers/
├── routes/
├── services/
├── models/
└── index.ts
```

---

## 🧰 Scripts

```
npm run dev    # modo desenvolvimento
npm run build  # compilar TS
npm start      # iniciar serviço buildado
```
