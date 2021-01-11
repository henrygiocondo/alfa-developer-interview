using System;

namespace ConsoleApp.Data.Repository.Interfaces
{
    public interface IAirportsRepository : IDisposable
    {
        object Get(string filter);
    }
}
