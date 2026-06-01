# Seleção FESF-SUS – 1 F.C

Projeto desenvolvido como parte do processo seletivo da FESF-SUS, contemplando uma API REST em Python utilizando FastAPI e uma interface web desenvolvida com React/Next.js.

## Tecnologias Utilizadas

### Backend

* Python 3.10+
* FastAPI
* SQLAlchemy
* SQLite
* Uvicorn

### Frontend

* Next.js
* React
* JavaScript

## Estrutura do Projeto

```text
Selecao-FESF-SUS-1-FC/
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── requirements.txt
│   └── pacientes.db
│
├── frontend/
│   ├── pages/
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

## Funcionalidades

* Cadastro de pacientes
* Listagem de pacientes
* Integração entre Frontend e API
* Persistência de dados utilizando SQLite

## Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

* Python 3.10 ou superior
* Node.js 18 ou superior
* npm

## Como Executar o Backend

Acesse a pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

Inicie a aplicação:

```bash
uvicorn main:app --reload
```

A API estará disponível em:

```text
http://localhost:8000
```

Documentação automática (Swagger):

```text
http://localhost:8000/docs
```

## Como Executar o Frontend

Abra um novo terminal e acesse a pasta do frontend:

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

O frontend estará disponível em:

```text
http://localhost:3000
```

## Banco de Dados

O projeto utiliza SQLite para armazenamento dos dados.

Caso o arquivo do banco de dados não exista, ele será criado automaticamente na primeira execução da aplicação.

## Integração

O frontend consome os dados disponibilizados pela API FastAPI através dos endpoints implementados no backend.

## Repositório

Este repositório foi desenvolvido para comprovação de conhecimento em:

* Desenvolvimento de API REST com FastAPI
* Desenvolvimento Frontend com React/Next.js
* Integração entre Frontend e Backend
* Manipulação de banco de dados com SQLAlchemy e SQLite
* Controle de versão com Git e GitHub

