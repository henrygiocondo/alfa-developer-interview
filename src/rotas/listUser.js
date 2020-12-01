const odata = require('odata').o;
const DEFAULT_URL = 'https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/';

const listUser = async (userName) => {
  try {
            
      const result = {
        $select: 'FirstName, LastName',
        $filter: `contains(UserName, '${userName}')`,
    }

      const response = await odata(DEFAULT_URL).get('People').query(result);
      console.log(response);
  } catch (err) {
      console.log(err);
  }
}

module.exports = listUser; 
