import React from "react";

import Axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { url } from "../constants/Server";

const DeletePeopleModal = ({ show, onCancel, setToastInfo }) => {
  //Usando https://cors-anywhere.herokuapp.com/ para não ocorrer o bloqueio
  //da CORS por parte do servidor.

  const deleteUser = async () => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    Axios.post(
      `https://cors-anywhere.herokuapp.com/${url}/People('${show?.user?.UserName}')`,
      config
    )
      .then((res) => {
        setToastInfo({
          show: true,
          message: "Usuário removido com sucesso!",
          type: "success",
        });
        onCancel();
      })
      .catch((err) => {
        setToastInfo({ show: true, message: `${err}`, type: "error" });
      });
  };

  return (
    <Modal
      show={show?.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Excluir usuário?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>
          Tem certeza que deseja excluir {show?.user?.FirstName}{" "}
          {show?.user?.LastName}?
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={() => onCancel()}>
          Cancelar
        </Button>
        <Button variant="outline-dark" onClick={() => deleteUser()}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePeopleModal;
