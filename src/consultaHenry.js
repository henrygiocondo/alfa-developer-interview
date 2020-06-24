var https = require('https');

var options = {
  host: "services.odata.org",
  port: 443,
  path: "/TripPinRESTierService/(S(1iit5imcudlfb3hd1duwtznk))/People?$filter=contains(UserName,'Henry')",
  method: 'GET'
};

var req = https.request(options, function(res) {
    res.setEncoding('utf8');

    var body = '';
    res.on('data', function (chunk) {
        body = body + chunk;
    });

    res.on('end',function(){
        if (res.statusCode != 200) {
            console.error('Problema com o a requisição, Erro Codigo: ' + res.statusCode);
            return
        } else {
            let dataRequest = JSON.parse(body)["value"];
            console.log(dataRequest.length+" Usuário(s) Encontrado(s)");
            for(i=0; i < dataRequest.length; i++){
                let firstName = dataRequest[i].FirstName;
                let lastName = dataRequest[i].LastName;
                console.log("Nome: "+firstName);
                console.log("Sobrenome: "+lastName);
                console.log("");
            }
            return    
        }
    });
});

req.on('error', function(e) {
    console.error('Problema com o Request, Erro: ' + e.message);
});

req.end();