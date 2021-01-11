using ConsoleApp.Shared.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp.Data.Repository.Interfaces
{
    public interface IPeopleRepository : IDisposable
    {
        object Get(string filter, string select);

        void Post(PeopleModel people);

        void Delete(string userName);
    }
}
