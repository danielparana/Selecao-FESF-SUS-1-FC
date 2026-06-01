# Sistema de Pacientes

Sistema simples para cadastro e consulta de pacientes desenvolvido com FastAPI no backend e Next.js no frontend.

## Tecnologias Utilizadas

### Backend

* Python
* FastAPI
* SQLAlchemy
* SQLite
* Uvicorn

### Frontend

* React
* Next.js

---

## Funcionalidades

* Cadastro de pacientes
* Listagem de pacientes
* Integração entre frontend e backend
* Persistência dos dados utilizando SQLite

---

## Estrutura do Projeto

```text
projeto/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   └── pacientes.db
│
└── frontend/
    ├── pages/
    │   └── index.js
    ├── package.json
    └── ...
```

---

## Como Executar o Backend

Acesse a pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
pip install fastapi uvicorn sqlalchemy
```

Execute a aplicação:

```bash
uvicorn main:app --reload
```

A API ficará disponível em:

```text
http://localhost:8000
```

Documentação Swagger:

```text
http://localhost:8000/docs
```

---

## Como Executar o Frontend

Acesse a pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

O sistema ficará disponível em:

```text
http://localhost:3000
```

---

## Endpoints da API

### Listar pacientes

```http
GET /pacientes
```

### Cadastrar paciente

```http
POST /pacientes
```

Exemplo de corpo da requisição:

```json
{
  "nome": "Daniel",
  "cpf": "07173240522",
  "telefone": "71999999999",
  "data_nascimento": "2000-01-01"
}
```

---

## Banco de Dados

O sistema utiliza SQLite para armazenamento dos dados.

O arquivo do banco é criado automaticamente:

```text
pacientes.db
```