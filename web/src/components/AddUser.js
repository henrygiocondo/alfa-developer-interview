import React, { useState } from "react";
import { toastr } from "react-redux-toastr";
import { 
    Button, 
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

import api from "../services/api";

const AddUser = () => {
    const [UserName , setUserName] = useState('');
    const [FirstName , setFirstName] = useState('');
    const [LastName , setLastName] = useState('');
    const [Email , setEmail] = useState('');
    const [Address , setAddress] = useState('');
    const [Name , setName] = useState('');
    const [CountryRegion , setCountryRegion] = useState('');
    const [Region , setRegion] = useState('');


    async function HandleAddUser() {

        try{

            const response = await api.post('/Create', { 
                UserName, 
                FirstName, 
                LastName, 
                Email,
                AddressInfo:[
                    {Address , City: {Name , CountryRegion , Region}}
                ] 
            });
           
                if (response.status === 200){
                    toastr.success('Sucesso', 'Cadastrado com sucesso');
                }

            }catch (error){
                toastr.error('Erro', 'Ocorreu um erro ao fazer o cadastro');
            }

    }

  return (
      <>
        <Form>
            <FormGroup>
                <Label>Usuário</Label>
                <Input 
                    type="text"
                    value={UserName}
                    placeholder="Usuário"
                    onChange={(e) =>setUserName(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Label>Primeiro Nome</Label>
                <Input 
                    type="text"
                    value={FirstName}
                    placeholder="Primeiro Nome"
                    onChange={(e) =>setFirstName(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Label>Sobrenome</Label>
                <Input 
                    type="text"
                    value={LastName}
                    placeholder="Sobrenome"
                    onChange={(e) => setLastName(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Label>Email</Label>
                <Input 
                    type="email"
                    value={Email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>


            <FormGroup>
                <Label>Endereço</Label>
                <Input 
                    type="text"
                    value={Address}
                    placeholder="Endereço"
                    onChange={(e) => setAddress(e.target.value)}
                />
            </FormGroup>


            <FormGroup>
                <Label>Bairro</Label>
                <Input 
                    type="text"
                    value={Name}
                    placeholder="Bairro"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Label>País</Label>
                <Input 
                    type="text"
                    value={CountryRegion}
                    placeholder="País"
                    onChange={(e) => setCountryRegion(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Label>Estado</Label>
                <Input 
                    type="text"
                    value={Region}
                    placeholder="Estado"
                    onChange={(e) => setRegion(e.target.value)}
                />
            </FormGroup>

            <Button variant="primary" size="lg" onClick={() => HandleAddUser()}>
                Cadastrar
            </Button>
        </Form>
   </>     
  );
};

export default AddUser;
