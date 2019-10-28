using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClientRestAirPort
{
    class EndPoints
    {

        //public string PeopleConsult = "/People?$filter=contains(UserName, '{0}')";
        public string PeopleConsult = "/People?$filter=contains(UserName, '{0}')";
        public string FlightConsult = "/Airports?$filter=contains(Location/Address, '{0}')";
        public string AdPeople = "/People";
        public string DeletePeople = "/People('{0}')";

     


    }
}
