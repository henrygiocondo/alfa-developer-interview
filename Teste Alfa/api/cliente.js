const listarClientes = () => {
    return fetch('https://services.odata.org/TripPinRESTierService/(S(mx3dttyxqolle55nwmmaljiq))/People')
    .then( resposta => { 
      return resposta.json()
    })
    .then( json => { 
      return json 
    })
}
const dataInput = document.querySelector("[data-input]").value;
const listarClientesPorNome = () => {
  return fetch(`https://services.odata.org/TripPinRESTierService/(S(mx3dttyxqolle55nwmmaljiq))/People?$filter=contains(UserName,'${this.dataInput}')`)
  .then( resposta => { 
    return resposta.json()
  })
  .then( json => { 
    return json 
  })
}

const cadastrarClientes = (username, name, lastname, email, address, city, countryRegion, region) =>  {
  const json = JSON.stringify({
    UserName: username,
    FirstName: name,
    FirstName: lastname,
    Email: [email],
    AddressInfo: [{
      Address: address,
      City: {
        Name: city,
        CountryRegion: countryRegion,
        Region: region,
      }
     }
    ]
  })
  return fetch('https://services.odata.org/TripPinRESTierService/(S(mx3dttyxqolle55nwmmaljiq))/People',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: json
  })
  .then( resp => { 
    return resp.body
  })
} 

const deletaCliente = id => {
  return fetch(`https://services.odata.org/TripPinRESTierService/(S(mx3dttyxqolle55nwmmaljiq))/People('${id}')`, {
    method: "DELETE",
})}