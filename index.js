const odata = require('odata').o;
const DEFAULT_URL = 'https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/';

/**
 * 
 * Consultar nome e sobrenome das pessoas com nome de usuário que contenha Henry
 * 
 */
const consultarNomeSobrenome = async (nome) => {
    try {
        const nomeMinusculo = nome.toLowerCase();

        const objToSearch = {
            $select: 'FirstName, LastName',
            $filter: `contains(UserName, '${nomeMinusculo}')`,
        }

        const response = await odata(DEFAULT_URL).get('People').query(objToSearch);
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

/**
 * 
 * Incluir uma pessoa
 * 
 */
const criarNovoUsuario = async () => {
    try {
        const dadosUsuario = {
            UserName: "gabrielfazendoteste",
            FirstName: "Gabriel",
            LastName: "Brito",
            MiddleName:	"André",
            // Gender:	"Male",
            Age: 24,
            Emails: ["gabriel@gmail.com", "gabriel@outlook"],	
            // FavoriteFeature: "Feature2",
            // Features: ["Feature1", "Feature2"],
            AddressInfo: [
                {
                    Address: "Rua 12",
                    City: {
                        Name: "Brasília",
                        CountryRegion: "Centro Oeste",
                        Region: "Goiás"
                    }
                }
            ],
            HomeAddress: null
        }

        const response = await odata(DEFAULT_URL).post('People', dadosUsuario).query();
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

/**
 * 
 * Excluir a pessoa que você incluiu acima
 * 
 */
const deletarUsuario = async (userName) => {
    try {
        const response = await odata(DEFAULT_URL).delete(`People('${userName}')`).query();
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

/**
 * 
 * Consultar todos os aeroportos que o endereço da localização contenha a palavra 'District'
 * 
 */
const consultarAeroportos = async (term) => {
    try {
        const objToSearch = {
            $filter: `contains(Location/Address, '${term}')`,
        }

        const response = await odata(DEFAULT_URL).get('Airports').query(objToSearch);
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

const execute = (option) => {
    switch(option) {
        case 'consultarNomeSobrenome':
            return consultarNomeSobrenome('Henry')
        case 'criarNovoUsuario':
            return criarNovoUsuario('Henry')
        case 'deletarUsuario':
            return deletarUsuario('gabrielfazendoteste')
        case 'consultarAeroportos':
            return consultarAeroportos('District')
        default:
            console.log('Verifique o argumento digitado');
    }
}

execute(process.argv[2])