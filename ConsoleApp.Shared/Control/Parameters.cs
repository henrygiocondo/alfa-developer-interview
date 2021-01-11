using System;

namespace ConsoleApp.Shared.Control
{
    public class Parameters : IDisposable
    {
        private bool disposedValue;

        private string BaseURL { get; set; }
        public string GetBaseURL
        {
            set { BaseURL = $"http://services.odata.org/TripPinRESTierService/(S(3mslpb2bc0k5ufk24olpghzx))/{value}"; }
            get { return BaseURL; }
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
        ~Parameters()
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
