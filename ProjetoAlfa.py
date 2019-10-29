import requests
import os
import time
contador = 1
while (contador == 1):
 os.system('cls')
 print('\n0 - Consultar com nome de usuario.')
 print('1 - Adicionar pessoa.')
 print('2 - Excluir pessoa.')
 print('3 - Consultar aeroportos.')
 print('4 - Sair')
 digitado = int(input('\nDigite alguma das opções acima:\n'))

 url = 'https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))'

 if digitado == 0:
   resposta = str(input('Digite um nome de usuario.\n'))
   rqst = requests.get("{0}/People?$filter=contains(UserName,'{1}')".format(url,resposta));
   if rqst.status_code == 200:
       response_json = rqst.json()
       for i in response_json['value']:
           FirstName = i['FirstName']
           LastName = i['LastName']
           print('Primeiro nome:{0},\nUltimo nome:{1}\n'.format(FirstName, LastName))
       time.sleep(4)


 elif digitado == 1:
   rzero = str(input('Digite seu nome de usuario.\n'))
   rum = str(input('Digite seu primeiro nome.\n'))
   rdois = str(input('Digite seu ultimo nome.\n'))

   data = {'UserName':'{0}'.format(rzero), 'FirstName':'{0}'.format(rum), 'LastName':'{0}'.format(rdois)}
   rqst = requests.post('{0}/People'.format(url), json=data);
   if rqst.status_code == 201:
      print('Inserido com sucesso.\n')
      time.sleep(4)
   else:
      print('Erro.')
      time.sleep(4)

 elif digitado == 2:
   resposta = str(input('Digite o nome de usuario para apagar:\n'))
   rqst = requests.delete("{0}/People('{1}')".format(url,resposta));
   if rqst.status_code == 204:
       print('Deletado com sucesso.\n')
       time.sleep(4)
   else:
       print('Usuário inexistente.\n')
       time.sleep(4)

 elif digitado == 3:
   resposta = str(input('Digite o endereço do aeroporto.\n'))
   rqst = requests.get("{0}/Airports?$filter=contains(Location/Address, '{1}')".format(url,resposta));
   if rqst.status_code == 200:
       response_json = rqst.json()
       for i in response_json['value']:
	       Name = i['Name']
	       IataCode = i['IataCode']
	       print(Name, IataCode)
       time.sleep(4)
   else:
       print('Aeroporto inexistente.')

 elif digitado == 4:
   os.system('cls')
   contador -=1
 else:
       print('Escolha uma opção.')
       time.sleep(3)
