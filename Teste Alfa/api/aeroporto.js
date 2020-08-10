const listarAeroportos = () => {
    return fetch("https://services.odata.org/TripPinRESTierService/(S(mx3dttyxqolle55nwmmaljiq))/Airports?$filter=contains(Location/Address,'District')")
    .then( resposta => { 
      return resposta.json()
    })
    .then( json => { 
      return json 
    })
}