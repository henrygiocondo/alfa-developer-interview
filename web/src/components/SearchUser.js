import React, { useState, useEffect } from "react";
import { toastr } from "react-redux-toastr";
import { 
    Button, 
    Form,
    Input,
    InputGroup,
    CustomInput,
    InputGroupAddon,
    Label,
    Table
} from "reactstrap";

import DeleteModal from "./modals/DeleteModal";
import ListUsers from "./ListUsers";
import api from "../services/api";

const SearchUser = () => {

    const [Field, setField] = useState('FirstName');
    const [Buscar, setBuscar] = useState('henry');
    const [peopleData, setPeopleData] = useState([]);

    // const [showDelete, setShowDelete] = useState(false);
    // const [userId4Actions, setUserId4Actions] = useState(0);
    // const handleDeleteClose = () => setShowDelete(false);
    // const handleDeleteShow = () => setShowDelete(true);

    async function handleSearchUser(){
        if (!Buscar){
            toastr.error('Erro', 'Digite o nome da pessoa');
            return;
        }
        try{
            const response  = await api.get('/Search' , {
                params:{filter: Buscar , type: Field}
            });
            console.log(response);
            setPeopleData(response.data);
            // const people = response.data;
            // setPeople(people);
        }catch(error){
            // setInputError('Erro ao realizar busca');
            toastr.error('Erro', 'Erro ao realizar busca');
        }
  
    }

    // const deleteUser = (user) => {
    //     console.log('Delete');
    //     handleDeleteShow();
    //     setUserId4Actions(user);
    //   };

        async function HandleListUser() {
            try{
                const response = await api.get('/',);
                if (response.status === 200){
                    setPeopleData(response.data);
                }
                }catch (error){
                    toastr.error('Erro', 'Ocorreu um erro ao tentar listar usuários');
                }
        }
    
      useEffect(() => {
        //First load
        HandleListUser();
      }, []);

    
    const clearFilter = () => HandleListUser();

	return (
        <>
            <h3 style={{marginTop: '30px', marginBottom: '30px'}}>Burcar Usuário</h3>
            <Form>
               
                <InputGroup className="mb-3">
                    <CustomInput type="select" onChange={(e) =>setField(e.target.value)} id="exampleCustomSelect" name="customSelect">
                    <option value="FirstName">FirstName</option>
                    <option value="LastName">LastName</option>
                    </CustomInput>
                    <Input
                        type="text"
                        value={Buscar}
                        placeholder="Buscar..."
                        onChange={(e) =>setBuscar(e.target.value)}
                    />
                    <InputGroupAddon addonType="append" color="primary">
                    <Button  onClick={() => handleSearchUser()}>Buscar</Button>
                    </InputGroupAddon>
                </InputGroup>

                <Button variant="info" onClick={() => clearFilter()}>
				    Limpar Busca
			    </Button>
            </Form> 

            <ListUsers peopleData={peopleData} />
        </>                     
	);
};

export default SearchUser;
