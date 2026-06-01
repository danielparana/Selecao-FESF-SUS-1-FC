from pydantic import BaseModel

class PacienteCreate(BaseModel):
    nome: str
    cpf: str
    telefone: str
    data_nascimento: str

class PacienteResponse(PacienteCreate):
    id: int

    class Config:
        from_attributes = True