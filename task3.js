const https = require('https');
const serviceHost = 'services.odata.org';
const servicePath = '/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/';
const delPerson = "People('willhenry')";
const postData = JSON.stringify(delPerson);
const options = {
    hostname: serviceHost,
    path: servicePath + delPerson,
    port: 443,
    method: 'DELETE',
};
const req = https.request(options, function(res) {
    let body = '';
    res.on('data', function (chunk) {
        body += chunk;
    });
    res.on('end', function () {
       if (!body) {
           console.log('Pessoa excluída com sucesso');
       } else{
           console.log('Pessoa não existe');
       }
        
    });
});
req.on('error', function(e) {
    console.log('ERRO: ' + e.message);
});
req.write(postData);
req.end();