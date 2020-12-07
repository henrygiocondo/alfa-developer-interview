const https = require('https');
const serviceHost = 'services.odata.org';
const servicePath = '/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/';
// criando duas pessoas
const newPerson = {
    UserName:'willhenry',
    FirstName:'Willian',
    LastName:'Smith',
    Emails:['will@email.com','willhenry@email.com'],
    AddressInfo:[{
        Address: 'Rua A, 1',
        City:{
            Name:'Americana',
            CountryRegion: 'Brasil',
            Region:'SP'
        }
    }]
};
const postData = JSON.stringify(newPerson);
const options = {
    hostname: serviceHost,
    path: servicePath + 'People',
    port: 443,
    method: 'POST',
    headers: {
        'OData-Version': '4.0',
        'OData-MaxVersion': '4.0',
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
};
const req = https.request(options, function(res) {
    let body = '';
    res.on('data', function (chunk) {
        body += chunk;
    });
    res.on('end', function () {
        console.log('Pessoa criada com sucesso');
        console.log(body);
    });
});
req.on('error', function(e) {
    console.log('ERRO: ' + e.message);
});
req.write(postData);
req.end();