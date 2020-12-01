const listUser = require("./rotas/listUser");
const insertUser = require("./rotas/insertUser");
const deleteUser = require("./rotas/deleteUser");
const listAirports = require("./rotas/listAirports");

const interface = require('readline-sync');

const readlineSync = require('readline-sync'),
opcao = ['Consultar nome e sobrenome:', 
           'Incluir Pessoa', 
           'Excluir Pessoa',
           'Consultar todos os aeroportos que o endereco da localizacao contenha a palavra: '],
           index = readlineSync.keyInSelect(opcao, 'Digite uma opcao:');
           
 if ( index == 0 ){
  const userName = interface.question('Digite o nome de usuario para consultar: ');
  listUser(userName);
 } 
 
 else if ( index == 1 ){
  const userName = interface.question('username: ');
  const firstName = interface.question('Digite o First Name: ');
  const lastName = interface.question('Last Name: ');
  //const middlename = interface.question('Digite o Middle Name:');
  //const gender = interface.question('Gender MALE/FEMALE: ');
  const age = Number(interface.question('Age: '));
  const emails = interface.question('Emails: separe por virgula caso tenha mais de um email!: ');
  const address = interface.question('address: ');
  const cityName = interface.question('City: ');
  const countryRegion = interface.question('Country Region: ');
  const region = interface.question('region: ');
  //const homeAddres = interface.question('homeAddres: ');
  
  const AddressInfo = [];

  insertUser(userName,
             firstName,
             lastName,
            // middlename,
            // gender,
            age,
            emails,
            address,
            cityName,
            countryRegion,
            region,
            //homeAddres
            );




 } else if ( index == 2 ){
  const userName = interface.question('Digite o username para deletar: ');
  deleteUser(userName);
} 

else if ( index == 3 ){
  const location = interface.question('Digite uma parte da localizacao: ');
  listAirports(location);
 } 
 
else {
     console.log(' erro, selecione uma opcao de 1 a 4')
 }

/*
[*]Consultar nome e sobrenome das pessoas com nome de usuário que contenha Henry
[*] Incluir uma pessoa
[] Excluir a pessoa que você incluiu acima
[*] Consultar todos os aeroportos que o endereço da localização contenha a palavra 'District'
 */
