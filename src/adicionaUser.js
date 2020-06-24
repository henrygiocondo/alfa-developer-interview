var https = require('https');

const data = JSON.stringify({
    "UserName":"Julio Cesar",
    "FirstName":"Julio",
    "LastName":"Cesar",
    "Emails":[
        "juliojcmedeiros@gmail.com"
    ],
    "AddressInfo": [
        {
        "Address": "Av Bartholomeu de Carlos 901",
        "City": {
            "Name": "Guarulhos",
            "CountryRegion": "Brazil",
            "Region": "ID"
            }
        }
    ]
})

var options = {
    host: "services.odata.org",
    port: 443,
    path: "/TripPinRESTierService/(S(1iit5imcudlfb3hd1duwtznk))/People",
    method: 'POST',  
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};


const req = https.request(options, (res) => {    
    if(res.statusCode == 201){
        console.log('Usuario (Julio Cesar) Adicionado com Sucesso!!');
    }else{
        console.error('Problema com o a requisição, Erro Codigo: ' + res.statusCode);
    }
})
  
req.on('error', (error) => {
    console.error(error);
})
  
req.write(data);
req.end();