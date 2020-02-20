const axios = require('axios');

module.exports = {
    async districtAirports(req, res){
        try{
            const apiResponse = await axios.get("https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/Airports?$filter=contains(Location/Address, 'District')");

            return res.json(apiResponse.data.value);
        }catch(e){
            console.error('Failure!');
            console.error(e.response.status);
        }
    }
}