
const https = require('https');

const axios = require('axios').default;

var apiRoot = 'https://services.odata.org';

var apiKey = '';

function logar(mensagem, objeto) {
  
  let msg = `${ new Date().toLocaleTimeString() }> ${ mensagem }`;

  if (objeto) {

    console.log(msg, objeto);

  } else { 
  
    console.log(msg); 
  }
}

function buscarODataKey(url) {
  
  return new Promise((resolve, reject) => {

    url = apiRoot + '/TripPinRESTierService';

    logar('Chamando ' + url);

    try {

      https.get(url, (res) => {
        
        logar('Response status code:', res.statusCode);

        if (res.statusCode == 302) {

          apiKey = res.headers.location;

          // tirando a última / pra deixar mais explícito nas concatenações
          apiKey = apiKey.substr(0, apiKey.length - 1);

          logar('Chave da API:', apiKey);

          resolve();
        }
      });
      
    } catch(err) {

      reject(err);
    }
  });
}

async function specConsultarNomeSobrenomeAsync(nomeUsuario) {

  // valor padrão
  if (!nomeUsuario) nomeUsuario = 'Henry';

  logar(`== PRIMEIRA DEMANDA: Consultar nome e sobrenome das pessoas com nome de usuário que contenha ${ nomeUsuario } ==`);

  let url = `${ apiRoot }${ apiKey }/People?$filter=contains(UserName, '${ nomeUsuario }')`;

  logar(`specConsultarNomeSobrenomeAsync(${ nomeUsuario }) em ${ url }`);

  await axios.get(url).then((okResult) => {
  
    let resultado = okResult.data ? okResult.data.value : null;

    if(resultado && resultado.length > 0) {

      logar(`${ resultado.length } pessoas encontradas`);

      for (let p = 0; p < resultado.length; p++) {

        logar(`Nome: ${ resultado[p].FirstName } SobreNome: ${ resultado[p].LastName }`);
      }

    } else {
    
      logar(`Nenhuma pessoa encontrada com o nome de usuário que contenha [${ nomeUsuario }]`)
    }

    logar('specConsultarNomeSobrenomeAsync() finalizada com SUCESSO.');

  }, (errResult) => {
  
    logar('specConsultarNomeSobrenomeAsync() finalizada com ERRO', errResult);
  });
}

async function specIncluirPessoaAsync(nomePessoa) {

  // valor padrão
  if (!nomePessoa) nomePessoa = 'Luciano de Maria Leal';

  logar(`== SEGUNDA DEMANDA: Incluir uma pessoa ==`);

  let nomes = nomePessoa.split(' ');
  let lastName = nomes[nomes.length - 1];
  let middleName = nomePessoa.substr(nomePessoa.indexOf(' ') + 1, nomePessoa.substr(nomePessoa.indexOf(' ') + 1).lastIndexOf(lastName) - 1);

  let pessoa = {
    UserName:   nomePessoa.replace(/ /gi, ''),
    FirstName:  nomes[0],
    LastName:   lastName,
    MiddleName: middleName
  }

  let url = `${ apiRoot }${ apiKey }/People`;

  logar(`specIncluirPessoa('${ nomePessoa }') em ${ url }:`, pessoa);

  let resposta = await axios.post(url, pessoa);

  logar('specIncluirPessoa() finalizada.', resposta.data);

  return resposta.data;
}

async function specExcluirPessoaAsync(idPessoa) {

  logar(`== TERCEIRA DEMANDA: Excluir a pessoa incluída ==`);

  let url = `${ apiRoot }${ apiKey }/People('${ idPessoa }')`;

  logar(`specExcluirPessoa(${ idPessoa }) em ${ url }`);

  await axios.delete(url);
  
  logar('specExcluirPessoa() finalizada.');
}

async function specConsultarAeroportosAsync(busca) {

  logar(`== QUARTA DEMANDA: Consultar todos os aeroportos que o endereço da localização contenha a palavra 'District' ==`);

  // valor padrão
  if (!busca) busca = 'District'

  let url = `${ apiRoot }${ apiKey }/Airports?$filter=contains(Location/Address, '${ busca }')`;

  logar(`Chamando specConsultarAeroportosAsync('${ busca }') em ${ url }`);

  await axios.get(url).then((okResult) => {
  
    let resultado = okResult.data ? okResult.data.value : null;

    if(resultado && resultado.length > 0) {

      logar(`${ resultado.length } aeroportos encontrados:`, resultado);
    
    } else {
    
      logar(`Nenhum aeroporto encontrado com o endereço que contenha [${ busca }]`)
    }

    logar('specConsultarAeroportosAsync() finalizada com SUCESSO.');

  }, (errResult) => {
  
    logar('specConsultarAeroportosAsync() finalizada com ERRO', errResult);
  });
}

async function rodarEspecificacoes() {

  let params = process.argv.filter(p => p.includes('='));

  let usuario, endereco;

  params.forEach(p => {
    let val = p.split('=');
    if (val[0].toLowerCase() == 'usuario')  { usuario  = val[1]; }
    if (val[0].toLowerCase() == 'endereco') { endereco = val[1]; }
  })

  await buscarODataKey();

  await specConsultarNomeSobrenomeAsync(usuario);

  let pessoa = await specIncluirPessoaAsync();

  await specExcluirPessoaAsync(pessoa.UserName);

  await specConsultarAeroportosAsync(endereco);
}

rodarEspecificacoes();