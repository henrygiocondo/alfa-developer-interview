import React, { useState, useEffect } from "react";
import { toastr } from "react-redux-toastr";
import { 
    Button, 
    Form,
    FormGroup,
    Input,
    Table
} from "reactstrap";

import api from "../services/api";

const SearchAirports = () => {

    const [Buscar, setBuscar] = useState('District');
    const [airportsData, setAirportData] = useState([]);

   
    async function handleSearchAirport(){
        if (!Buscar){
            toastr.error('Erro', 'Digite o nome do Aeroporto');
            return;
        }
        try{
            const response  = await api.get('/SearchAirports' , {
                params:{filter: Buscar }
            });
            if (response.status === 200){
                setAirportData(response.data);
            }
            }catch (error){
                toastr.error('Erro', 'Ocorreu um erro ao tentar listar os aeroportos');
            }
    }

    useEffect(() => {
        //First load.
        handleSearchAirport();
      }, []);


	return (
        <>
            <h4>Consultar Aeroportos</h4>

            <Form>
                <FormGroup>
                    <Input 
                        type="text"
                        value={Buscar}
                        placeholder="Buscar"
                        onChange={(e) =>setBuscar(e.target.value)}
                    />
                </FormGroup>

                <Button 
                variant="info" 
                onClick={() => handleSearchAirport()}
                >
                    Buscar
                </Button>
            </Form>


            <div style={{ marginTop: 20 }}>
                
                <div style={{ width: "100%" }}>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <td>Nome</td>
                        </tr>
                        </thead>
                        <tbody>
                        {airportsData.map((airport) => (
                            <tr key={airport.Name}>
                            <td>{airport.Name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>

                <div>
                    <h5>Total de resultados: {airportsData?.length}</h5>
                </div>

            </div>
        </>    
	);
};

export default SearchAirports;
