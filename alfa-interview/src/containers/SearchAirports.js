import React, { useState, useEffect } from "react";

import Axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import { url } from "../constants/Server";

const SearchAirports = () => {
  const [search, setSearch] = useState("District");
  const [airportsData, setAirportData] = useState([]);

  const [listTitle, setListTitle] = useState("Lista de aeroportos cadastradas");

  const searchAirport = async () => {
    const query = `${url}/Airports?$filter=contains(Location/Address, '${search}')`;
    const response = await Axios.get(query);
    setAirportData(response.data.value);
    setListTitle(
      search ? "Resultado da Busca" : "Lista de aeroportos cadastradas"
    );
  };

  useEffect(() => {
    //First load bring every peoplo on db.
    searchAirport();
  }, []);

  return (
    <div style={{ marginLeft: 25, marginRight: 25, marginTop: 30 }}>
      <div style={{ display: "inline-block" }}>
        <h3>Consultar aeroportos</h3>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div style={{ marginTop: 10 }}>
          <Button variant="outline-dark" onClick={() => searchAirport()}>
            Buscar
          </Button>
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <div style={{ display: "inline-block" }}>
          <h3>{listTitle}</h3>
        </div>
        <div style={{ marginLeft: 10, display: "inline-block" }}>
          <>Total de resultados: {airportsData?.length}</>
        </div>
        <div style={{ width: "100%" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <td>Nome</td>
              </tr>
            </thead>
            <tbody>
              {airportsData.map((airport) => (
                <tr key={airport.Name}>
                  <td>{airport.Name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SearchAirports;
