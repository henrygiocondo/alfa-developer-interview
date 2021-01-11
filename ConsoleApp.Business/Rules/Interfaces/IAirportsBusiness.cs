using System;

namespace ConsoleApp.Business.Rules.Interfaces
{
    public interface IAirportsBusiness : IDisposable
    {
        object Get(string filter);
    }
}
