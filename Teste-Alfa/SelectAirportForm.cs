using System;
using System.Windows.Forms;
using Teste_Alfa.Service;

namespace Teste_Alfa
{
    public partial class SelectAirportForm : Form
    {
        private TripPinRESTierService service = null;
        public SelectAirportForm()
        {
            InitializeComponent();
            service = new TripPinRESTierService();
        }

        private void btnFilter_Click(object sender, EventArgs e)
        {
            Airport.Value[] airports = service.SelectAirports(this.txbAddressFilter.Text);
            dgvAirports.Rows.Clear();
            for (int i = 0; i < airports.Length; i++)
            {
                dgvAirports.Rows.Add();
                dgvAirports.Rows[i].Cells[0].Value = (string)airports[i].Name;
                dgvAirports.Rows[i].Cells[1].Value = (string)airports[i].IcaoCode;
                dgvAirports.Rows[i].Cells[2].Value = (string)airports[i].IataCode;
            }
        }

        private void btnClose_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
