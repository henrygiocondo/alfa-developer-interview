using ConsoleApp.Data.Repository.Interfaces;
using ConsoleApp.Shared.Control;
using RestSharp;
using System;

namespace ConsoleApp.Data.Repository
{
    public class AirportsRepository : IAirportsRepository
    {
        private readonly Parameters parameteres = new Parameters();
        private bool disposedValue;

        public object Get(string filter)
        {
            try
            {
                var requestFormat = $"?$filter={filter}";
                parameteres.GetBaseURL = EntityTypes.Airports.ToString();
                IRestClient client = new RestClient(parameteres.GetBaseURL)
                {
                    ThrowOnAnyError = true
                };

                IRestRequest request = new RestRequest(requestFormat, Method.GET);
                var response = client.Execute(request);
                return response.Content;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                parameteres.Dispose();
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
        ~AirportsRepository()
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
