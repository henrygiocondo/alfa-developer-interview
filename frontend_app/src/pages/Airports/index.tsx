import React , {useState , FormEvent} from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {Title , Form , Airport , Error , Pag} from './styles';

interface Airports {
    Name: string;
    IataCode: string;
    Location:{
        City:{
            Name: String;
            CountryRegion: String;
            Region: String;
        }
    }
        

}

const Airports: React.FC = () => {
    const [newFilter , setNewFilter] = useState('');
    const [inputError , setInputError] = useState('');
    const [ airports , setAirports] = useState<Airports[]>([]);
    

   async function handleSearchAirport(event:FormEvent<HTMLFormElement>):Promise<void>{
        event.preventDefault();

        if (!newFilter){
            setInputError('Digite o nome da cidade');
            return;
        }
        
        try{
            const response  = await api.get('/SearchAirports' , {
                params:{filter: newFilter }
            });
           
            
           
            console.log(response);
            const airport = response.data;
            setAirports(airport);
            setNewFilter('');
            setInputError('');
            

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

        <Title>Consulte aeroportos através do endereço</Title>

        <Form hasError={!!inputError} onSubmit={handleSearchAirport}>
            <input
             value={newFilter}
             onChange={(e) => setNewFilter(e.target.value)}
                placeholder="Digite o nome da cidade"
            />
            <button type="submit">Pesquisar</button>
        </Form>
            { inputError && <Error>{inputError}</Error> }
        <Airport>
            {airports.map( airport => (

                            <Link  key={airport.IataCode} to="/SearchAirports">
                            <div>
                              <strong>Nome: {airport.Name}</strong><br></br>
                              <p>Cidade: {airport.Location.City.Name}</p>
                              <p>Região: {airport.Location.City.Region}</p>
                              <p>País: {airport.Location.City.CountryRegion}</p>

                            </div>
                            </Link>
            ))}

            
          
        </Airport>


        </>
    );
}

export default Airports;