import React, { useState } from "react";
import {Button, Table } from "reactstrap";
import DeleteModal from "./modals/DeleteModal";

const ListUsers = (props) => {

  const { peopleData } = props;

  const [showDelete, setShowDelete] = useState(false);
  const [userId4Actions, setUserId4Actions] = useState(0);
  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);

  const deleteUser = (user) => {
    console.log('Delete');
    handleDeleteShow();
    setUserId4Actions(user);
  };

  return (
    <>
         <h3 style={{marginTop: '30px', marginBottom: '30px'}}>Usuários Cadastrados</h3>
            <div style={{height: '300px', overflow: 'scroll'}}>
                <Table striped bordered hover responsive size="sm">
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Nome de usuário</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {peopleData.length <= 0 ? (
                        <tr>
                        <td colSpan="5" style={{ textAlign: "center" }}>
                            Nenhum usuário cadastrado!
                        </td>
                        </tr>
                    ) : (
                        peopleData.map((user, index) => (
                            <tr key={index}>
                            <td>{user.FirstName}</td>
                            <td>{user.LastName}</td>
                            <td>{user.UserName}</td>
                            <td>
                            <Button
                                variant="danger"
                                onClick={() => deleteUser(user)}
                            >
                                Delete
                            </Button>
                            </td>
                        </tr>
                        ))
                    )}
                    </tbody>
                </Table>
            </div>    

              <DeleteModal
                show={showDelete}
                user={userId4Actions}
                handleDelete={deleteUser}
                handleClose={handleDeleteClose}
             />  
    </>
  );
};

export default ListUsers;
