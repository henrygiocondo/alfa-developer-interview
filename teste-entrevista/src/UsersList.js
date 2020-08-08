import React, { useState } from "react";
import Axios from "axios";
import { BASE_URL } from "./Constants";

const UsersList = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearchClick = async () => {
    const query = `${BASE_URL}People?$filter=contains(UserName, '${search}')`;

    const response = await Axios.get(query);

    setUsers(response.data.value);
  };

  return (
    <div>
      <h3>Busca de Usuários</h3>
      <input
        type="text"
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
      />
      <button onClick={handleSearchClick}>buscar</button>
      <h3>Resultado da Busca</h3>
      <table>
        <thead>
          <tr>
            <td>UserName</td>
            <td>FirstName</td>
            <td>LastName</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.UserName}>
              <td>{user.UserName}</td>
              <td>{user.FirstName}</td>
              <td>{user.LastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;