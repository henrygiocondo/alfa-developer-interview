using ConsoleApp.Business.Rules.Interfaces;
using ConsoleApp.Data.Repository.Interfaces;
using ConsoleApp.Shared.Models;
using System;

namespace ConsoleApp.Business.Rules
{
    public class PeopleBusiness : IPeopleBusiness
    {
        private readonly IPeopleRepository peopleRepository;
        private bool disposedValue;

        public PeopleBusiness(IPeopleRepository _peopleRepository)
            => peopleRepository = _peopleRepository;

        public void Delete(string userName)
        {
            try
            {
                peopleRepository.Delete(userName);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                peopleRepository.Dispose();
            }
        }

        public object Get(string filter, string select)
        {
            try
            {
                return peopleRepository.Get(filter, select);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                peopleRepository.Dispose();
            }
        }

        public void Post(PeopleModel people)
        {
            try
            {
                peopleRepository.Post(people);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                peopleRepository.Dispose();
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
        ~PeopleBusiness()
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
