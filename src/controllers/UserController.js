const axios = require('axios');
let newUser;

module.exports = {
    async allUsers(req, res){
        try{
            const apiResponse = await axios.get("https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/People");

            let userList = apiResponse.data.value.map((item) => {
                return item.FirstName + ' ' + item.LastName;
            });

            return res.json({...userList});
        }catch(e){
            return res.json(e.response.statusText)
        }
    },
    async henryUser(req, res){
        try{
            const apiResponse = await axios.get("https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/People?$filter=contains(UserName , 'henry')");

            let userList = apiResponse.data.value.map((item) => {
                return item.FirstName + ' ' + item.LastName;
            });

            return res.json({...userList});
        }catch(e){
            return res.json(e.response.statusText)
        }
    },
    async createUser(req, res){
        try{
            let data = {
                "UserName": req.body.userName,
                "FirstName": req.body.firstName,
                "LastName": req.body.lastName,
                "Emails":[
                    req.body.email
                ],
                "AddressInfo": [
                {
                  "Address": req.body.address,
                  "City": {
                    "Name": req.body.city,
                    "CountryRegion": req.body.country,
                    "Region": req.body.id
                  }
                }
                ]
            }
            newUser = req.body.userName;
            const apiResponse = await axios.post("https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/People", data);

            return res.json(apiResponse.statusText);
        }catch(e){
            return res.json(e.response.statusText)
        }
    }, 
    async deleteUser(req, res){
        try{
            const apiResponse = await axios.delete("https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/People("+newUser+")");
            
            return res.json(apiResponse.statusText);
        }catch(e){
            return res.json(e.response.statusText)
        }
    }
}