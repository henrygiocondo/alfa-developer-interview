import React, { useState } from "react";

import Axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { url } from "../constants/Server";

const AddPeopleModal = ({ show, onHide, setToastInfo }) => {
  //Usando https://cors-anywhere.herokuapp.com/ para não ocorrer o bloqueio
  //da CORS por parte do servidor.

  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const registerUser = async () => {
    const user = {
      userName,
      firstName,
      middleName,
      lastName,
    };

    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    Axios.post(
      `https://cors-anywhere.herokuapp.com/${url}/People`,
      user,
      config
    )
      .then((res) => {
        console.log(res);
        setToastInfo({
          show: true,
          message: "Usuário cadastrado com sucesso!",
          type: "success",
        });
        onHide();
      })
      .catch((err) => {
        console.log(err);
        setToastInfo({ show: true, message: `${err}`, type: "error" });
      });
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          Cadastro de Usuário
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div>
            <input
              placeholder="Nome do Usuário"
              type="text"
              value={userName}
              onChange={({ target: { value } }) => setUserName(value)}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <input
              placeholder="Primeiro Nome"
              type="text"
              value={firstName}
              onChange={({ target: { value } }) => setFirstName(value)}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <input
              placeholder="Nome do meio"
              type="text"
              value={middleName}
              onChange={({ target: { value } }) => setMiddleName(value)}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <input
              placeholder="Último nome"
              type="text"
              value={lastName}
              onChange={({ target: { value } }) => setLastName(value)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={() => registerUser()}>
          Cadastrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPeopleModal;
