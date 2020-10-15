using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Net;


namespace Teste_Alfa.Service
{
    public class TripPinRESTierService
    {
        public Airport.Value[] SelectAirports(string AddressFilter)
        {
            RestRequest restRequest = new RestRequest(Method.GET);
            restRequest.AddQueryParameter("$filter", String.Format(@"contains(Location/Address, '{0}')", AddressFilter));
            IRestResponse restResponse = ExecRequest("Airports", restRequest);

            Airport.Rootobject item = JsonConvert.DeserializeObject<Airport.Rootobject>(restResponse.Content);

            return item.value;
        }

        public bool DeletePeople(string UserName)
        {
            bool ret = false;

            RestRequest restRequest = new RestRequest(Method.DELETE);
            restRequest.AddHeader("Content-Type", "application/json; charset=utf-8");
            IRestResponse restResponse = ExecRequest(String.Format(@"People('{0}')", UserName), restRequest);

            if (restResponse.StatusCode == HttpStatusCode.NoContent)
            {
                ret = true;
            }

            return ret;
        }

        public bool InsertPeople(People.Value people)
        {
            bool ret = false;

            RestRequest restRequest = new RestRequest(Method.POST);
            restRequest.AddHeader("Content-Type", "application/json; charset=utf-8");
            JsonSerializer serializer = new JsonSerializer();
            string Json = JsonConvert.SerializeObject(people,
                Newtonsoft.Json.Formatting.None,
                new JsonSerializerSettings
                {
                    NullValueHandling = NullValueHandling.Ignore,
                });
            restRequest.AddParameter("application/json", Json, ParameterType.RequestBody);
            IRestResponse restResponse = ExecRequest("People", restRequest);

            if (restResponse.StatusCode == HttpStatusCode.Created)
            {
                ret = true;
                MainForm.lastInsert = people.UserName;
            }

            return ret;
        }

        public List<String> SelectPeople(string UserName)
        {
            RestRequest restRequest = new RestRequest(Method.GET);
            restRequest.AddQueryParameter("$filter", String.Format(@"contains(UserName, '{0}')", UserName));
            IRestResponse restResponse = ExecRequest("People", restRequest);

            People .Rootobject item = JsonConvert.DeserializeObject<People.Rootobject>(restResponse.Content);

            List<String> userNames = new List<String>();
            if (item.value.Length > 0)
            {
                for (int i = 0; i < item.value.Length; i++)
                {
                    userNames.Add(item.value[i].FirstName + " " + item.value[i].LastName);
                }
            }
            else
            {
                userNames.Add("Nothing results!");
            }

            return userNames;
        }


        private IRestResponse ExecRequest(string Route, RestRequest restRequest)
        {
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            RestClient client = new RestClient(String.Format(@"https://services.odata.org/TripPinRESTierService/(S(njgid4cqup5b0fpkuinvtwsa))/{0}", Route));

            IRestResponse response = client.Execute(restRequest);

            return response;
        }
    }
}
