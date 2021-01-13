const { Router } = require('express');
const api = require('./api');

const routes = new Router();


 routes.get('/' , async  (request , response) => {
         api.get('/People').then(function(resposta){
             response.json(resposta.data.value);
            }).catch((error)=>{
             response.json(error);
        })

 });

routes.get('/Search' , (request , response)=> {
    const { filter  , type } = request.query;
    
    api.get(`/People?$filter=${type} eq '${filter}'` 
    ).then(res => {
        response.json(res.data.value);
    }).catch((error) => {
        response.json(error);
      })

})

routes.post('/Create' , (request, response) => {
    const { UserName , FirstName, LastName , Email ,
         Address , Name , CountryRegion , Region  } = request.body;

    var  Emails = Email;

    if (Email !== "" || Email !== undefined){
        Emails = Email.split(';');
    }

    api.post('/People' , {
        UserName , FirstName , LastName , Emails ,
            AddressInfo:[{Address , City: {Name , CountryRegion , Region}}]
    } 
    ).then(res => {
        response.json({message:'SUCESSO'
    });
    }).catch((error) => {
        response.json(error);
    })

});


routes.delete('/Delete' , (request, response) => {
    const { UserName   } = request.query;

    console.log('Delete UserName', UserName);

            api.delete(`/People('${UserName}')` 
                ).then(res => {
                    response.json({message:'SUCESSO'});
                }).catch((error) => {
                    response.json(error);
                  })
});


routes.get('/SearchAirports' , (request , response)=> {
    const { filter  } = request.query;

    api.get(`/Airports?$filter=contains(Location/Address, '${filter}')` 
    ).then(res => {
        response.json(res.data.value);
    }).catch((error) => {
        response.json(error);
      })

})


module.exports = routes;