using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TesteAlfa
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            listBox2.Items.Clear();

            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            var client = new RestClient("https://services.odata.org/TripPinRESTierService/(S(njgid4cqup5b0fpkuinvtwsa))/Airports");
            
            var request = new RestRequest(Method.GET);
            request.AddQueryParameter("$filter", "contains(Location/Address,'District')");


            IRestResponse response = client.Execute(request);
            Console.WriteLine(response.Content);

            json_Airport.Rootobject item = JsonConvert.DeserializeObject<json_Airport.Rootobject>(response.Content);

            if (item.value.Length <= 0)
            {
                listBox2.Items.Add("Nenhum registro encontrado!");
            }
            else
            {
                for (int i = 0; i < item.value.Length; i++)
                {
                    listBox2.Items.Add(item.value[i].Name.ToString());
                }
            }
        }

        // busca pessoas que contenham Henry no nome de usuário
        private void button1_Click(object sender, EventArgs e)
        {
            listBox3.Items.Clear();

            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            var client = new RestClient("https://services.odata.org/TripPinRESTierService/(S(njgid4cqup5b0fpkuinvtwsa))/People");

            var request = new RestRequest(Method.GET);
            request.AddQueryParameter("$filter", "contains(UserName, 'henry')");


            IRestResponse response = client.Execute(request);
            Console.WriteLine(response.Content);

            json_People.Rootobject item = JsonConvert.DeserializeObject<json_People.Rootobject>(response.Content);

            if (item.value.Length <= 0)
            {
                listBox3.Items.Add("Nenhum registro encontrado!");
            } else
            {
                for (int i = 0; i < item.value.Length; i++)
                {
                    listBox3.Items.Add(item.value[i].FirstName.ToString() + " " + item.value[i].LastName.ToString());
                }
            }
            
        }

        // Incluir e-mail para cadastro
        private void button5_Click(object sender, EventArgs e)
        {
            if (txbEmails.Text.Length > 0 && txbEmails.Text.Contains("@") && txbEmails.Text.Contains("."))
            {
                if (!listBox1.Items.Contains(txbEmails.Text))
                {
                    listBox1.Items.Add(txbEmails.Text);
                } 
            }
        }

        // enviar post de inclusão da pessoa
        private void button2_Click(object sender, EventArgs e)
        {

            if (txbUserName.Text.Length <= 0 || txbFirstName.Text.Length <= 0 || txbLastName.Text.Length <= 0)
            {
                MessageBox.Show("Fields Required: \n\n User Name \n\n First Name \n\n Last Name");
            }
            {
                string emails = "";
                for (int i = 0; i < listBox1.Items.Count; i++)
                {
                    emails += "\""+listBox1.Items[i].ToString() + "\",";
                }

                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

                var client = new RestClient("https://services.odata.org/TripPinRESTierService/(S(njgid4cqup5b0fpkuinvtwsa))/People");
                client.Timeout = -1;
                var request = new RestRequest(Method.POST);
                request.AddHeader("Content-Type", "application/json; charset=utf-8");
                request.AddParameter("application/json", "{\r\n    \"UserName\":\""+txbUserName.Text+"\",\r\n    \"FirstName\":\""+txbFirstName.Text+"\",\r\n    " +
                    "\"LastName\":\""+txbLastName.Text+"\",\r\n    \"Emails\":[\r\n        "+emails.Substring(0,emails.Length-1)+"\r\n    ],\r\n    \"" +
                    "AddressInfo\": [\r\n    {\r\n      \"Address\": \""+txbAddress.Text+"\",\r\n      " +
                    "\"City\": {\r\n        \"Name\": \""+txbCity.Text+"\",\r\n        \"CountryRegion\": \""+txbCountry.Text+"\",\r\n        " +
                    "\"Region\": \""+txbRegion.Text+"\"\r\n      }\r\n    }\r\n    ]\r\n}", ParameterType.RequestBody);
                IRestResponse response = client.Execute(request);
                Console.WriteLine(response.Content);

                if (response.StatusCode.ToString() == "Created")
                {
                    label2.Text = txbUserName.Text;
                    MessageBox.Show("People add!");
                }
            }
        }

        // remover e-mail da list
        private void button6_Click(object sender, EventArgs e)
        {
            if (listBox1.SelectedIndex > -1)
            {
                listBox1.Items.Remove(listBox1.SelectedItem.ToString());
            }
        }

        // buscar todas as pessoas
        private void button7_Click(object sender, EventArgs e)
        {
            listBox3.Items.Clear();

            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            var client = new RestClient("https://services.odata.org/TripPinRESTierService/(S(njgid4cqup5b0fpkuinvtwsa))/People");

            var request = new RestRequest(Method.GET);


            IRestResponse response = client.Execute(request);
            Console.WriteLine(response.Content);

            json_People.Rootobject item = JsonConvert.DeserializeObject<json_People.Rootobject>(response.Content);

            if (item.value.Length <= 0)
            {
                listBox3.Items.Add("Nenhum registro encontrado!");
            }
            else
            {
                for (int i = 0; i < item.value.Length; i++)
                {
                    listBox3.Items.Add(item.value[i].FirstName.ToString() + " " + item.value[i].LastName.ToString());
                }
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            label2.Text = "";
        }

        // apagar ultimo incluido
        private void button3_Click(object sender, EventArgs e)
        {
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            var client = new RestClient("https://services.odata.org/TripPinRESTierService/(S(njgid4cqup5b0fpkuinvtwsa))/People('" + label2.Text+"')");
            client.Timeout = -1;
            var request = new RestRequest(Method.DELETE);
            request.AddParameter("text/plain", "", ParameterType.RequestBody);
            IRestResponse response = client.Execute(request);
            
            if (response.StatusCode == HttpStatusCode.NoContent)
            {
                MessageBox.Show("People Deleted!");
                label2.Text = "";
            }
        }
    }
}
