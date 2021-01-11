using ConsoleApp.Data.Repository.Interfaces;
using ConsoleApp.Shared.Control;
using ConsoleApp.Shared.Models;
using RestSharp;
using System;

namespace ConsoleApp.Data.Repository
{
    public class PeopleRepository : IPeopleRepository
    {
        private readonly Parameters parameteres = new Parameters();
        private bool disposedValue;

        public void Delete(string userName)
        {
            try
            {
                var requestFormat = $"('{userName}')";
                parameteres.GetBaseURL = EntityTypes.People.ToString();
                IRestClient client = new RestClient(parameteres.GetBaseURL)
                {
                    ThrowOnAnyError = true
                };

                IRestRequest request = new RestRequest(requestFormat, Method.DELETE);
                client.Execute(request);
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

        public object Get(string filter, string select)
        {
            try
            {
                var requestFormat = $"?$filter={filter}&$select={select}";
                parameteres.GetBaseURL = EntityTypes.People.ToString();
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

        public void Post(PeopleModel people)
        {
            try
            {
                parameteres.GetBaseURL = EntityTypes.People.ToString();
                IRestClient client = new RestClient(parameteres.GetBaseURL)
                {
                    ThrowOnAnyError = true
                };

                IRestRequest request = new RestRequest(Method.POST);
                request.AddJsonBody(people);
                var response = client.Execute(request);
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
        ~PeopleRepository()
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
