using System;
using System.Windows.Forms;
using Teste_Alfa.Service;

namespace Teste_Alfa
{
    public partial class InsertPeopleForm : Form
    {
        private TripPinRESTierService service = null;
        public InsertPeopleForm()
        {
            InitializeComponent();
            service = new TripPinRESTierService();
        }

        private void btnClose_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void InsertPeopleForm_Shown(object sender, EventArgs e)
        {
            dgvEmails.Rows[0].Cells[0].Value = "henry.giocondo@gmail.com";
        }

        private void btnInsert_Click(object sender, EventArgs e)
        {
            People.Value value = new People.Value();

            value.UserName = txbUserName.Text;
            value.FirstName = txbFirstName.Text;
            value.LastName = txbLastName.Text;

            People.City city = new People.City();
            city.Name = txbCity.Text;
            city.Region = txbRegion.Text;
            city.CountryRegion = txbCountry.Text;

            People.Addressinfo addressinfo = new People.Addressinfo();
            addressinfo.Address = txbAddress.Text;
            addressinfo.City = city;

            value.AddressInfo = new People.Addressinfo[1];
            value.AddressInfo[0] = addressinfo;

            value.Emails = new string[dgvEmails.Rows.Count];
            for (int i = 0; i < dgvEmails.Rows.Count; i++)
            {
                value.Emails[i] = (string)dgvEmails.Rows[i].Cells[0].Value;
            }

            if (service.InsertPeople(value))
                MessageBox.Show("People Inserted!");
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            if (service.DeletePeople(txbUserName.Text))
                MessageBox.Show("People Deleted!");
        }
    }
}
