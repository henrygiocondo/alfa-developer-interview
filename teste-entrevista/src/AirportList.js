import React, { useState } from "react";
import Axios from "axios";
import { BASE_URL } from "./Constants";

function AirportList() {
    
    const [search, setSearch] = useState("");
    const [airport, setAirport] = useState([]);
    const handleSendClick = async () => {
        const query = `${BASE_URL}Airports?$filter=contains(Location/Address, '${search}')`;
        const response = await Axios.get(query);
        setAirport(response.data.value);
    };

    return (
        <div>
            <h3>Busca de Aeroportos</h3>
            <input
                placeholder="Aeroporto"
                type="text"
                value={search}
                onChange={({ target: { value } }) => setSearch(value)}
            />
            <button onClick={handleSendClick}>enviar</button>
            <h3>Resultado da Busca</h3>
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                </tr>
                </thead>
                <tbody>
                {airport.map((airport) => (
                    <tr key={airport.Name}>
                    <td>{airport.Name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AirportList;