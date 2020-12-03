import React ,  {useState , FormEvent} from 'react';
import api from '../../services/api';
import { Title , Form  , Pag } from '../CreatePeople/styles';
import { useToast } from '../../hooks/ToastContext';
import { Link } from 'react-router-dom';




const People: React.FC = () => {

    const [UserName , setUserName] = useState('');
    const [FirstName , setFirstName] = useState('');
    const [LastName , setLastName] = useState('');
    const [Email , setEmail] = useState('');
    const [Address , setAddress] = useState('');
    const [Name , setName] = useState('');
    const [CountryRegion , setCountryRegion] = useState('');
    const [Region , setRegion] = useState('');


    const {addToast}  = useToast();

    async function handleAddPeople(event:FormEvent<HTMLFormElement>):Promise<void>{
        event.preventDefault();
        
        try{

            const response = await api.post('/Create' , {
                UserName , FirstName , LastName , Email ,
                    AddressInfo:[{Address , City: {Name , CountryRegion , Region}}]
            });

            setUserName('');
            setFirstName('');
            setLastName('');
            setEmail('');
            setAddress('');
            setName('');
            setCountryRegion('');
            setRegion('');
    
            if (response.status === 200){
                addToast({
                    type: 'success',
                    title:'Cadastrado com sucesso',
                });
            }

        }catch (error){
            addToast({
                type: 'error',
                title:'Erro ao cadastrar ',
                description: 'Ocorreu um erro ao fazer o cadastro',
            });
        }

       
  
    }
    return (
        <>
        <Pag>
        <Link to="/">Pesquisar por uma pessoa</Link>
        <Link to="/SearchAirports">Pesquisar aeroportos</Link>
        <Link to="/CreatePeople">Cadastrar uma pessoa</Link>
        <Link to="/Delete">Excluir uma pessoa</Link>
        </Pag>

            <Title>Faça seu cadastro</Title>
            <Form onSubmit={handleAddPeople}>
            
                <input  value={FirstName} onChange={(e) =>setFirstName(e.target.value)} placeholder="Digite o nome "/>
                <input  value={LastName} onChange={(e) => setLastName(e.target.value)} placeholder="Digite o sobrenome"/>
                <input  value={UserName} onChange={(e) => setUserName(e.target.value)} placeholder="Digite o apelido"/>
                
                <input  value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite o email" />
                <input  value={Address} onChange={(e) => setAddress(e.target.value)} placeholder="Digite o endereço"/>
                <input  value={Name} onChange={(e) => setName(e.target.value)} placeholder="Digite o bairro" />
                <input  value={CountryRegion} onChange={(e) => setCountryRegion(e.target.value)} placeholder="Digite o país"/>
                <input  value={Region} onChange={(e) => setRegion(e.target.value)} placeholder="Digite o estado"/>

                <button type="submit">Cadastrar</button>

            </Form>
        </>
    )
}

export default People;