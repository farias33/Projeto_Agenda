# 📒 Projeto Agenda

Seja bem-vindo(a) ao repositório da **Agenda de Contatos**!  
Este projeto foi desenvolvido com carinho por um estudante de Engenharia de Software 💻, com o objetivo de aplicar na prática os conhecimentos de Node.js, Express e MongoDB.

---

## 🌟 Visão Geral

Imagine uma agenda digital simples, mas funcional, onde você pode:
- 📥 Cadastrar contatos
- 🔍 Visualizar todos os contatos
- ✏️ Editar informações
- ❌ Excluir um contato
- 🔐 Criar uma conta e realizar login

Tudo isso com um toque de segurança, utilizando CSRF tokens e hashes de senha com bcrypt.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** & **Express** – Backend rápido e simples
- **MongoDB** – Armazenamento dos contatos
- **Mongoose** – Modelagem dos dados
- **EJS** – Templates dinâmicos para renderizar as páginas
- **Bootstrap** – Interface amigável e responsiva
- **bcryptjs** – Segurança das senhas
- **express-session** & **connect-mongo** – Gerenciamento de sessões
- **express-flash** – Mensagens de sucesso e erro para o usuário
- **csurf** – Proteção contra ataques CSRF

---

## 👤 Funcionalidades

### 🧾 Autenticação
- Criação de usuário com validação
- Login com senha criptografada
- Sessões persistentes por usuário logado

### 📇 Contatos
- Formulário para criar um novo contato
- Listagem completa de todos os contatos
- Edição e exclusão de contatos
- Validações importantes: nome obrigatório, email válido, telefone/email requeridos

---

## 📂 Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/projeto-agenda.git
