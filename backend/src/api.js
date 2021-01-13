const axios  = require('axios');
const Key = "(S(w1uvcn4q2ihbqoin5o44jxue))"
const api = axios.create({
    baseURL: `https://services.odata.org/TripPinRESTierService/${Key}`,
})
module.exports = api;