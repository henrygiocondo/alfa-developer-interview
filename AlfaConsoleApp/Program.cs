using ConsoleApp.Business.Rules;
using ConsoleApp.Business.Rules.Interfaces;
using ConsoleApp.Data.Repository;
using ConsoleApp.Data.Repository.Interfaces;
using ConsoleApp.Shared.Models;
using System;
using System.Collections.Generic;

namespace AlfaConsoleApp
{
    class Program
    {
        private static readonly IPeopleRepository peopleRepository = new PeopleRepository();
        private static readonly IPeopleBusiness peopleBusiness = new PeopleBusiness(peopleRepository);

        private static readonly IAirportsRepository airportsRepository = new AirportsRepository();
        private static readonly IAirportsBusiness airportsBusiness = new AirportsBusiness(airportsRepository);

        private static void GetAirports()
        {
            try
            {
                var filter = $"contains(Location/Address, 'District')";
                var retorno = airportsBusiness.Get(filter);

                Console.WriteLine(retorno.ToString());
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao realizar consulta: {ex}");
            }
            finally
            {
                airportsBusiness.Dispose();
            }
        }

        private static void GetPeople()
        {
            try
            {
                var filter = $"contains(UserName, 'Henry')";
                var select = $"FirstName, LastName";
                var retorno = peopleBusiness.Get(filter, select);

                Console.WriteLine(retorno.ToString());
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao realizar consulta: {ex}");
            }
            finally
            {
                peopleBusiness.Dispose();
            }
        }

        private static void PostPeople()
        {
            try
            {
                List<string> emails = new List<string>()
                {
                    "marcelbelato@gmail.com"
                };

                CityModel city = new CityModel()
                {
                    Name = "Cotia",
                    CountryRegion = "Brasil",
                    Region = "SP"
                };

                List<AddressModel> addresses = new List<AddressModel>();

                AddressModel address = new AddressModel()
                {
                    Address = "Av. Austrália, 77",
                    City = city
                };
                
                addresses.Add(address);

                PeopleModel people = new PeopleModel()
                {
                    UserName = "marcelbelato",
                    FirstName = "Marcel",
                    LastName = "Belato",
                    Emails = emails,
                    AddressInfo = addresses
                };

                peopleBusiness.Post(people);

                Console.WriteLine("Entidade inserida com sucesso.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao inserir entidade: {ex}");
            }
            finally
            {
                peopleBusiness.Dispose();
            }
        }

        private static void DeletePeople()
        {
            try
            {
                peopleBusiness.Delete("marcelbelato");
                Console.WriteLine($"Entidade excluída com sucesso.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao realizar a exclusão da entidade: {ex}");
            }
            finally
            {
                peopleBusiness.Dispose();
            }
        }

        static void Main(string[] args)
        {
            PostPeople();
            Console.WriteLine();
            Console.ReadKey();
            GetPeople();
            Console.WriteLine();
            Console.ReadKey();
            DeletePeople();
            Console.WriteLine();
            Console.ReadKey();
            GetAirports();
            Console.WriteLine();
            Console.ReadKey();
        }
    }
}
