import React, { useState } from "react";
import Axios from "axios";
import { BASE_URL } from "./Constants";

function CreateUser() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("Male");

  const handleSendClick = async () => {
    const user = {
      userName,
      firstName,
      middleName,
      lastName,
      age,
      gender,
    };

    // A requisição funciona apenas utilizando o Postman, quando ela é executada em um navegador, ela é bloqueada pelo Cors do servidor.
    Axios.post(`${BASE_URL}People`, user);
  };

  return (
    <div>
      <h3>Cadastro de Usuário</h3>

      <input
        placeholder="Nome do Usuário"
        type="text"
        value={userName}
        onChange={({ target: { value } }) => setUserName(value)}
      />
      <input
        placeholder="Primeiro Nome"
        type="text"
        value={firstName}
        onChange={({ target: { value } }) => setFirstName(value)}
      />
      <input
        placeholder="Nome do meio"
        type="text"
        value={middleName}
        onChange={({ target: { value } }) => setMiddleName(value)}
      />
      <input
        placeholder="Último nome"
        type="text"
        value={lastName}
        onChange={({ target: { value } }) => setLastName(value)}
      />
      <input
        type="number"
        value={age}
        onChange={({ target: { value } }) => setAge(value)}
      />
      <select
        value={gender}
        onChange={({ target: { value } }) => setGender(value)}
      >
        <option value="Male">Masculino</option>
        <option value="Female">Feminino</option>
      </select>
      <button onClick={handleSendClick}>enviar</button>
    </div>
  );
}

export default CreateUser;