using System;
using System.Windows.Forms;
using Teste_Alfa.Service;

namespace Teste_Alfa
{
    public partial class SelectPeopleForm : Form
    {
        private TripPinRESTierService service = null;
        public SelectPeopleForm()
        {
            InitializeComponent();
            service = new TripPinRESTierService();
        }

        private void btnClose_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnSelect_Click(object sender, EventArgs e)
        {
            foreach (String userName in service.SelectPeople(txbUserName.Text))
            {
                lbUserNames.Items.Add(userName);
            };
        }
    }
}
