const odata = require('odata').o;
const DEFAULT_URL = 'https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/';


const deleteUser = async (userName) => {
  try {
          
      const response = await odata(DEFAULT_URL).delete(`People('${userName}')`).query();
      console.log(`\n User:${userName}, deleted! \n` );            

      
  } catch (err) {
         console.log('\n Não existe cadastro com este userName! \n');
        //console.log(`\n Não existe cadastro com este '${userName}'! \n`);            
      
      //console.log(err);
       
  }
}

module.exports = deleteUser;