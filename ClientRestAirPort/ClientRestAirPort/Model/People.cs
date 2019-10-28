using ClientRestAirPort.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClientRestAirPort
{
    public class People
    {
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public List<String> Emails { get; set; }

        public List<AddressInfo> AddressInfo = new List<AddressInfo>();
    }
}
