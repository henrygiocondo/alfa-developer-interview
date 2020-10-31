import React, { useState, useEffect } from "react";

import Axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import { url } from "../constants/Server";

import AddPeopleModal from "../components/AddPeopleModal";
import InformativeToast from "../components/InformativeToast";
import DeletePeopleModal from "../components/DeletePeopleModal";

const SearchPeople = () => {
  const [search, setSearch] = useState("");
  const [peopleData, setPeopleData] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const [toastInfo, setToastInfo] = useState({
    show: false,
    message: undefined,
    type: undefined,
  });
  const [showDeleteUserModal, setShowDeleteUserModal] = useState({
    show: false,
    user: undefined,
  });

  const [listTitle, setListTitle] = useState("Lista de pessoas cadastradas");

  const searchPeople = async () => {
    const query = `${url}/People?$filter=contains(UserName, '${search}')`;
    const response = await Axios.get(query);
    setPeopleData(response.data.value);
    setListTitle(
      search ? "Resultado da Busca" : "Lista de pessoas cadastradas"
    );
  };

  useEffect(() => {
    //First load bring every peoplo on db.
    searchPeople();
  }, []);

  return (
    <>
      <div style={{ marginLeft: 25, marginRight: 25, marginTop: 30 }}>
        <div style={{ display: "inline-block" }}>
          <h3>Consultar usuário</h3>
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div style={{ marginTop: 10 }}>
            <Button variant="outline-dark" onClick={() => searchPeople()}>
              Buscar
            </Button>
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <Button variant="outline-dark" onClick={() => setModalShow(true)}>
            Cadastrar pessoa
          </Button>
        </div>
        <div style={{ marginTop: 30 }}>
          <div style={{ display: "inline-block" }}>
            <h3>{listTitle}</h3>
          </div>
          <div style={{ marginLeft: 10, display: "inline-block" }}>
            <>Total de resultados: {peopleData?.length}</>
          </div>
          <div style={{ width: "100%" }}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <td>Nome</td>
                  <td>Sobrenome</td>
                  <td>Nome de usuário</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {peopleData.map((user) => (
                  <tr key={user.UserName}>
                    <td>{user.FirstName}</td>
                    <td>{user.LastName}</td>
                    <td>{user.UserName}</td>
                    <td
                      onClick={() =>
                        setShowDeleteUserModal({
                          show: true,
                          user: user,
                        })
                      }
                      style={{ color: "red" }}
                    >
                      Excluir
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      {modalShow && (
        <AddPeopleModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          setToastInfo={setToastInfo}
        />
      )}
      {showDeleteUserModal?.show && (
        <DeletePeopleModal
          show={showDeleteUserModal}
          setToastInfo={setToastInfo}
          onCancel={() =>
            setShowDeleteUserModal({
              show: false,
              user: undefined,
            })
          }
        />
      )}
      <InformativeToast toast={toastInfo} setToastInfo={setToastInfo} />
    </>
  );
};

export default SearchPeople;
