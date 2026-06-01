import { useEffect, useState } from "react";

export default function Home() {
  const [pacientes, setPacientes] = useState([]);

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  async function carregarPacientes() {
    const resposta = await fetch("http://localhost:8000/pacientes");
    const dados = await resposta.json();
    setPacientes(dados);
  }

  async function cadastrarPaciente(e) {
    e.preventDefault();

    const resposta = await fetch(
      "http://localhost:8000/pacientes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          cpf,
          telefone,
          data_nascimento: dataNascimento,
        }),
      }
    );

    if (resposta.ok) {
      setNome("");
      setCpf("");
      setTelefone("");
      setDataNascimento("");

      carregarPacientes();
    } else {
      alert("Erro ao cadastrar paciente");
    }
  }

  useEffect(() => {
    carregarPacientes();
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1>Sistema de Pacientes</h1>

      <form onSubmit={cadastrarPaciente}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <input
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>

      <hr />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Nascimento</th>
          </tr>
        </thead>

        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{paciente.nome}</td>
              <td>{paciente.cpf}</td>
              <td>{paciente.telefone}</td>
              <td>{paciente.data_nascimento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}