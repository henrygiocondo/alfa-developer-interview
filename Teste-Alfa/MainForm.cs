using System;
using System.Windows.Forms;

namespace Teste_Alfa
{
    public partial class MainForm : Form
    {
        public static string lastInsert = "";
        public MainForm()
        {
            InitializeComponent();
        }

        private void SelectPeopleHenryToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.OpenForm(new SelectPeopleForm());
        }

        private void InsertPeopleToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.OpenForm(new InsertPeopleForm());
        }

        private void SelectAirportsDistrictToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.OpenForm(new SelectAirportForm());
        }

        public void OpenForm(Form frmForm)
        {
            frmForm.MdiParent = this;
            frmForm.Show();
        }
    }
}
