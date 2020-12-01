const odata = require('odata').o;
const DEFAULT_URL = 'https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/';
                 
const listAirports = async (word) => {
  try {
      const result = {
          $filter: `contains(Location/Address, '${word}')`,
      }
      
      const response = await odata(DEFAULT_URL).get('Airports').query(result);
      console.log(response);
  } catch (err) {
      console.log(err);
  }
}

module.exports = listAirports;


