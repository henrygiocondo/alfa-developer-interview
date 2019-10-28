using System;

namespace ClientRestAirPort
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.WriteLine("Bem vindo!");
            Console.WriteLine("Selecione a opção");
            Console.WriteLine("1- Adicionar Pessoa");
            Console.WriteLine("2- Deletar Pessoa");
            Console.WriteLine("3- Consultar pessoa");
            Console.WriteLine("4- Consultar vôo");

           int opcao = Convert.ToInt32(Console.ReadLine());

     

            Request request = new Request();

            switch (opcao)
            {
                case 1:
                    request.addPeople();
                    break;
                case 2:
                    request.DeleteP();
                    break;
                case 3:
                    request.PeopleConsult();
                    break;
                case 4:
                    request.getFlight();
                    break;
                default:
                    Console.WriteLine("opção inválida");
                    break;
            }   
            
            
            

        }
    }
}
