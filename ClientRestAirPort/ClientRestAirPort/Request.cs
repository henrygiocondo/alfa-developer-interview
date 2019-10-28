using ClientRestAirPort;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using ClientRestAirPort.Model;


namespace ClientRestAirPort
{

    public class Request
    {
        EndPoints Consulta = new EndPoints();
        public void PeopleConsult()
        {
            Console.WriteLine("Digite o Nome de usuário a ser pesquisado: ");
            var CPeople = Console.ReadLine();
            var client = new RestClient("https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))" + String.Format(Consulta.PeopleConsult, CPeople));
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);
            var content = response.Content;
            JObject results = JsonConvert.DeserializeObject<JObject>(content.ToString());
            Console.WriteLine(results);
        }

        public void getFlight()
        {
            Console.WriteLine("Palavra chave do Aeroporto: ");
            var AirName = Console.ReadLine();
            var client = new RestClient("https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))" + String.Format(Consulta.FlightConsult, AirName));
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);
            var content = response.Content;
            JObject results = JsonConvert.DeserializeObject<JObject>(content.ToString());

            Console.Write(results);
            Console.ReadKey();
        }
        public void addPeople()
        {
            RestClient client = new RestClient("https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))" + Consulta.AdPeople);
            RestRequest request = new RestRequest(Method.POST);
            request.RequestFormat = DataFormat.Json;

            Console.WriteLine("Nome de usuário:" );
            string User = Console.ReadLine();
            Console.WriteLine("Primeiro nome:");
            string FirstName = Console.ReadLine();
            Console.WriteLine("Sobrenome:");
            string SecondName = Console.ReadLine();
            //Console.WriteLine("E-mail:");
            //string email = Console.ReadLine();
            Console.WriteLine("Endereço:" );
            string Address2 = Console.ReadLine();
            Console.WriteLine("Cidade:");
            string CityName = Console.ReadLine();
            Console.WriteLine("Região: ");
            string Country = Console.ReadLine();
            Console.WriteLine("UF: ");
            string Region = Console.ReadLine();

            People people = new People
            {
                UserName = User,
                FirstName = FirstName,
                LastName = SecondName,

                Emails = new List<string>
                {
                    "mail@mail.com"
                },

                AddressInfo = new List<AddressInfo>()
                {
                    new AddressInfo
                    {
                        Address = Address2,

                        City = new City()
                        {
                            Name = CityName,
                            CountryRegion = Country,
                            Region = Region
                        }

                    }
                }
            };

            string json = JsonConvert.SerializeObject(people);

            request.AddJsonBody(json);

            IRestResponse response = client.Execute(request);
            string content = response.Content;
            JObject results = JsonConvert.DeserializeObject<JObject>(content.ToString());

            Console.Write(results);
            Console.ReadKey();

        }
        public void DeleteP()
        {
            Console.WriteLine("Digite o Nome a ser deletado: ");
            var DelPeople = Console.ReadLine();
            var client = new RestClient("https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))" + String.Format(Consulta.DeletePeople, DelPeople));
            var request = new RestRequest(Method.DELETE);
            IRestResponse response = client.Execute(request);
            var content = response.Content;
            JObject results = JsonConvert.DeserializeObject<JObject>(content.ToString());

            if (response.StatusCode == HttpStatusCode.NoContent)
                Console.WriteLine("Excluido");
            else
                Console.WriteLine("Usuário não existente");
        }
    }
}
