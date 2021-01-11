using ConsoleApp.Business.Rules.Interfaces;
using ConsoleApp.Data.Repository.Interfaces;
using System;

namespace ConsoleApp.Business.Rules
{
    public class AirportsBusiness : IAirportsBusiness
    {
        private readonly IAirportsRepository airportsRepository;
        private bool disposedValue;

        public AirportsBusiness(IAirportsRepository _airportsRepository)
            => airportsRepository = _airportsRepository;

        public object Get(string filter)
        {
            try
            {
                return airportsRepository.Get(filter);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                airportsRepository.Dispose();
            }
        }

        #region Garbage Collector

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects)
                }

                // TODO: free unmanaged resources (unmanaged objects) and override finalizer
                // TODO: set large fields to null
                disposedValue = true;
            }
        }

        // TODO: override finalizer only if 'Dispose(bool disposing)' has code to free unmanaged resources
        ~AirportsBusiness()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: false);
        }

        public void Dispose()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }

        #endregion

    }
}
