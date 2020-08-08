import React, { useState } from "react";
import Axios from "axios";
import { BASE_URL } from "./Constants";

function DeleteUser() {
    const [userName, setUserName] = useState("");

    const handleSendClick = async () => {
        // A requisição funciona apenas utilizando o Postman, quando ela é executada em um navegador, ela é bloqueada pelo Cors do servidor.
        Axios.delete(`${BASE_URL}People('${userName}')`);
    }
    return (
        <div>
            <h3>Deletar um Usuário</h3>
            <input
                placeholder="Username"
                type="text"
                value={userName}
                onChange={({ target: { value } }) => setUserName(value)}
            />
            <button onClick={handleSendClick}>enviar</button>
        </div>
    );
}

export default DeleteUser;