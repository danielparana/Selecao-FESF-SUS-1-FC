from fastapi import FastAPI
from sqlalchemy.orm import Session

from database import engine, SessionLocal
from models import Base, Paciente
from schemas import PacienteCreate

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)


@app.get("/")
def home():
    return {"mensagem": "API funcionando"}


@app.get("/pacientes")
def listar_pacientes():
    db: Session = SessionLocal()

    pacientes = db.query(Paciente).all()

    db.close()

    return pacientes


@app.post("/pacientes")
def cadastrar_paciente(paciente: PacienteCreate):

    db: Session = SessionLocal()

    novo = Paciente(
        nome=paciente.nome,
        cpf=paciente.cpf,
        telefone=paciente.telefone,
        data_nascimento=paciente.data_nascimento
    )

    db.add(novo)
    db.commit()
    db.close()

    return {"mensagem": "Paciente cadastrado"}