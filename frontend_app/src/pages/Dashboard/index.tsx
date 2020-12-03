import React , {useState , FormEvent} from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {Title , Form , People , Error , Pag} from './styles';

interface People {
    FirstName: string;
    UserName: string;
    LastName: string;
    Emails: string;
}

const Dashboard: React.FC = () => {
    const [newPeople , setNewPeople] = useState('');
    const [valor , setValor] = useState('FirstName');
    const [inputError , setInputError] = useState('');
    const [ peoples , setPeople] = useState<People[]>([]);
    

   async function handleSearchPeople(event:FormEvent<HTMLFormElement>):Promise<void>{
        event.preventDefault();

        if (!newPeople){
            setInputError('Digite o nome da pessoa');
            return;
        }
        
        try{
            const response  = await api.get('/Search' , {
                params:{filter: newPeople , type: valor}
            });
           
            
           
            console.log(response);
            const people = response.data;
            setPeople(people);
            setNewPeople('');
            setInputError('');
            setValor('FirstName');

        }catch(error){
            setInputError('Erro ao realizar busca');
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

        <Title>Explore os cadastros de pessoas</Title>

        <Form hasError={!!inputError} onSubmit={handleSearchPeople}>
        <label>
          Escolha o tipo de busca:
          
            <select value={valor} onChange={(e) => setValor(e.target.value)}>
                <option value="FirstName">Nome</option>
                <option value="LastName">Sobrenome </option>
            </select>
        </label>
            <input
             value={newPeople}
             onChange={(e) => setNewPeople(e.target.value)}
                placeholder="Digite o nome da pessoa"
            />
            <button type="submit">Pesquisar</button>
        </Form>
            { inputError && <Error>{inputError}</Error> }
        <People>
            {peoples.map( people => (

                            <Link  key={people.UserName} to="/">
                            <div>
                              <strong>Nome usuário: {people.UserName}</strong>
                              <p>Nome: {people.FirstName} </p>
                              <p>Sobrenome: {people.LastName} </p>
                              <p>Emails: {people.Emails} </p>
       
                            </div>
                            </Link>
            ))}

            
          
        </People>


        </>
    );
}

export default Dashboard;