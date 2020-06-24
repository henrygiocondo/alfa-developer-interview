import axios from 'axios';

class ODataController {
    async searchAiports(req, res) {
        try {
            const api = await axios.get(
                "https://services.odata.org/TripPinRESTierService/Airports?$filter=contains(Location/Address, 'District')"
            );

            return res.status(200).json(api.data.value);
        } catch (e) {
            return res.status(400).json({ error: 'Airport not found' });
        }
    }

    async searchUser(req, res) {
        try {
            const firstName = await axios.get(
                "https://services.odata.org/TripPinRESTierService/People?$filter=FirstName eq 'Henry'"
            );
            const lastName = await axios.get(
                "https://services.odata.org/TripPinRESTierService/People?$filter=LastName eq 'Henry'"
            );

            if (!firstName || !lastName) {
                return res.status(400).json({
                    error:
                        'Não possui nenhum usuário com este Nome ou Sobrenome',
                });
            }

            return res.status(200).json({
                nome: firstName.data.value,
                sobrenome: lastName.data.value,
            });
        } catch (e) {
            return res.status(400).json({ error: 'Erro na requisição' });
        }
    }

    async create(req, res) {
        try {
            const body = {
                UserName: 'Paloma',
                FirstName: 'Monteiro',
                LastName: 'Black',
                Emails: ['lewisblack@example.com'],
                AddressInfo: [
                    {
                        Address: 'Teste',
                        City: {
                            Name: 'Boise',
                            CountryRegion: 'United States',
                            Region: 'ID',
                        },
                    },
                ],
            };

            await axios.post(
                'https://services.odata.org/V4/TripPinServiceRW/(S(d4ycsxilwxr5x3djic5vxw1a))/People',
                body
            );

            return res
                .status(400)
                .json({ sucess: 'Usuário criado com sucesso.' });
        } catch (e) {
            return res
                .status(400)
                .json({ error: 'Usuário não pode ser criado.' });
        }
    }

    async delete(req, res) {
        try {
            await axios.delete(
                `https://services.odata.org/V4/TripPinServiceRW/People('Paloma')`
            );

            return res
                .status(201)
                .json({ sucess: 'Usuário deletado com sucesso.' });
        } catch (e) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }
    }
}

export default new ODataController();
