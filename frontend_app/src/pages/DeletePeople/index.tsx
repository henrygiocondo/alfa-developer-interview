import React , {useState , FormEvent} from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../../hooks/ToastContext';

import api from '../../services/api';

import {Title , Form ,  Error , Pag} from './styles';


const Dashboard: React.FC = () => {
    const [newPeople , setNewPeople] = useState('');
    const [inputError , setInputError] = useState('');
    
    const {addToast}  = useToast();
   async function handleSearchPeople(event:FormEvent<HTMLFormElement>):Promise<void>{
        event.preventDefault();

        if (!newPeople){
            setInputError('Digite o apelido');
            return;
        }
        
        try{
            const response  = await api.delete('/Delete' , {
                params:{UserName: newPeople }
            });
           
            
           
            if (response.status === 200){
                addToast({
                    type: 'success',
                    title:'Excluído com sucesso',
                });
            }

            setNewPeople('');
            setInputError('');
            

        }catch(error){
            setInputError('Erro ao excluir');
            addToast({
                type: 'error',
                title:'Erro ao excluir cadastro ',
                description: 'Ocorreu um erro ao excluir o cadastro',
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

        <Title>Faça aqui a exclusão de um cadastro</Title>

        <Form hasError={!!inputError} onSubmit={handleSearchPeople}>
            <input
             value={newPeople}
             onChange={(e) => setNewPeople(e.target.value)}
                placeholder="Digite o apelido da pessoa"
            />
            <button type="submit">Excluir</button>
        </Form>
        


        </>
    );
}

export default Dashboard;