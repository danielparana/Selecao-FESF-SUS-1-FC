from sqlalchemy import Column, Integer, String
from database import Base

class Paciente(Base):
    __tablename__ = "pacientes"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String)
    cpf = Column(String)
    telefone = Column(String)
    data_nascimento = Column(String)