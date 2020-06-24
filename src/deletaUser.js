var https = require('https');

var options = {
    host: "services.odata.org",
    port: 443,
    path: "/TripPinRESTierService/(S(1iit5imcudlfb3hd1duwtznk))/People(%27Julio%20Cesar%27)",
    method: 'DELETE'
};


const req = https.request(options, (res) => {    
    if((res.statusCode == 201) || (res.statusCode == 204)){
        console.log('Usuario (Julio Cesar) Deletado com Sucesso!!');
    }else if(res.statusCode == 404) {
        console.error('Problema com o a requisição, ou usuário não encontrado na Base de Dados!!');
    }else{
        console.error('Problema com o a requisição, Erro Codigo: ' + res.statusCode);
    }
})
  
req.on('error', (error) => {
    console.error(error);
})

req.end();