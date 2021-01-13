import React from "react";
import { toastr } from "react-redux-toastr";
import { Button,  Modal,  ModalBody,  ModalFooter, ModalHeader, } from "reactstrap";

import api from "../../services/api";

const DeleteModal = (props) => {
  const { show, user, handleClose } = props;

        async function handleDeleteUser(){
            try{
                const response  = await api.delete('/Delete' , {
                    params:{UserName: user.UserName }
                });
                if (response.status === 200){
                    toastr.success('Sucesso', 'Excluído com sucesso');
                }
                handleClose();
            }catch(error){
                toastr.error('Error', 'Ocorreu um erro ao excluir o cadastro');
                handleClose();
            }
        }

  return (
    <>

        <Modal
            isOpen={show}
            toggle={handleClose}
            centered
        >
            <ModalHeader toggle={() => handleClose()}>Deletar usuário</ModalHeader>
          <ModalBody>Você tem certeza?</ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => handleClose()}>
              Não, Cancelar
            </Button>
            <Button color="danger" onClick={() => handleDeleteUser()}>
              Sim, Deletar
            </Button>
          </ModalFooter>
        </Modal>
     
    </>
  );
};


export default DeleteModal;
