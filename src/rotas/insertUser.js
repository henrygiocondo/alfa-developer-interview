const odata = require('odata').o;
const DEFAULT_URL = 'https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/';


const insertUser = async (
    userName, 
    firstName, 
    lastName, 
    // middlename,
    //gender,
    age,
    emails,
    address,
    cityName,
    countryRegion,
    region,
    homeAddres

    ) => {
  try {
      const dataUser = {
          UserName: userName,
          FirstName: firstName,
          LastName: lastName,
          //MiddleName: "",
          //Gender: gender,
          Age: age,
          Emails: [emails],
          // FavoriteFeature: "Feature2",
          // Features: ["Feature1", "Feature2"],	
          AddressInfo: [
              {
                  Address: address,
                  City: {
                      Name: cityName,
                      CountryRegion: countryRegion,
                      Region: region
                  }
              }
          ],
          HomeAddress: null//homeAddres
      }

      const response = await odata(DEFAULT_URL).post('People', dataUser).query();
      console.log(response);
  } catch (err) {
      console.log(err);
  }
}

module.exports = insertUser;