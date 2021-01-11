using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp.Shared.Models
{
    public class PeopleModel
    {
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<string> Emails { get; set; }
        public List<AddressModel> AddressInfo { get; set; }
    }
}
