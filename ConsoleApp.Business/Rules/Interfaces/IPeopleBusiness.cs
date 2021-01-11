using ConsoleApp.Shared.Models;
using System;

namespace ConsoleApp.Business.Rules.Interfaces
{
    public interface IPeopleBusiness : IDisposable
    {
        object Get(string filter, string select);

        void Post(PeopleModel people);

        void Delete(string userName);
    }
}
