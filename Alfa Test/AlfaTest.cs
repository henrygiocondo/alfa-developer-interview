using Microsoft.OData.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reference;
using System.Threading;

namespace Alfa_Test
{
    public class AlfaTest
    {

        public static async Task ListPeopleByUserName(string pUserName)
        {
            var serviceRoot = "https://services.odata.org/TripPinRESTierService/";
            var context = new Container(new Uri(serviceRoot));
            try
            {
                IEnumerable<Person> people = context.People.Where(p => p.UserName.ToUpper().Contains(pUserName.ToUpper()));
                foreach (var person in people)
                {
                    Console.WriteLine("{0} {1}", person.FirstName, person.LastName);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                throw;
            }
            
        }

        public static async Task PostPerson(Person person)
        {
            var serviceRoot = "https://services.odata.org/TripPinRESTierService/";
            var context = new Container(new Uri(serviceRoot));
            try
            {
                context.AddObject("People", person);
                var response = context.SaveChanges();
            }
            catch (Exception e)
            {
               Console.WriteLine(e.Message);
                throw;
            }

        }

        public static async Task DeletePerson(Person person)
        {
            var serviceRoot = "https://services.odata.org/TripPinRESTierService/";
            var context = new Container(new Uri(serviceRoot));
            try
            {
                context.DeleteObject(person);
                var response = context.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                throw;
            }

        }

        public static async Task ListAirportByLocalization(string address)
        {
            var serviceRoot = "https://services.odata.org/TripPinRESTierService/";
            var context = new Container(new Uri(serviceRoot));
            try
            {
                IEnumerable<Airport> airports = context.Airports.Where(a => a.Location.Address.ToUpper().Contains(address));
                foreach (var airport in airports)
                {
                    Console.WriteLine("{0}", airport.Name);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                throw;
            }

        }

        public static void ExecutarExercicios()
        {
            // 1° Exercício - Consultar nome e sobrenome das pessoas com nome de usuário que contenha Henry
            ListPeopleByUserName("Henry");
            // 2° Exercício - Incluir uma pessoa
            Person newPerson = new Person
            {
                UserName = "thalesadler",
                FirstName = "Thales",
                LastName = "Adler"
            };
            PostPerson(newPerson);
            // 3° Exercício - Excluir a pessoa que você incluiu acima
            DeletePerson(newPerson);
            // 4° Exercício - Consultar todos os aeroportos que o endereço da localização contenha a palavra 'District'
            ListAirportByLocalization("District");


            // Obs. Não consegui resolver o erro "The response to this POST request did not contain a 'location' header. That is not supported by this client" ao executar o Post de Pessoa, devido ao prazo de entrega do teste
        }
    }
}
