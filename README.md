# DEVELOPER INTERVIEW

Este teste tem como objetivo não apenas enteder o conhecimento técnico do candidato com linguagem A, B ou C, mas também sua capacidade de:
* ***ler documentações***
* ***entender e executar o que está sendo solicitado***
* ***solucionar problemas***
* ***organizar o código***

Além de é claro ***conhecer a qualidade, legibilidade do código, as suas escolhas técnicas e a lógica utilizada***.

Para enviar seu teste basta forkar esse repositório e criar o seu projeto (ou workspace) usando a sua versão desse repositório, tão logo acabe o teste, submeta um pull request.


# VAMOS LÁ?

### [OData.org](https://www.odata.org/)
>**OData (Open Data Protocol)** é um padrão OASIS aprovado pela ISO / IEC que define um conjunto de práticas recomendadas para criar e consumir APIs RESTful. 

>O **OData** ajuda você a se concentrar na lógica de negócios enquanto cria APIs RESTful sem se preocupar com as várias abordagens para definir cabeçalhos de solicitação e resposta, códigos de status, métodos HTTP, convenções de URL, tipos de mídia, formatos de carga útil, opções de consulta etc. 

>O **OData** também fornece orientação para rastrear alterações, definir funções / ações para procedimentos reutilizáveis e enviar solicitações assíncronas / em lote.

Usando uma linguagem de programação de sua preferência, consuma os dados [deste serviço padrão OData](https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/) executando as operações:

Referência [OData Services](https://www.odata.org/odata-services/)

- [ ] Consultar ***nome*** e ***sobrenome*** das ***pessoas*** com ***nome de usuário*** que contenha ***Henry***
- [ ] ***Incluir*** uma pessoa
- [ ] ***Excluir*** a pessoa que você incluiu acima
- [ ] Consultar todos os aeroportos que o ***endereço da localização*** contenha a palavra 'District'

# Requisitos:

* Ter node.js instalado na maquina.
* Ter npm instalado

**Para iniciar, vamos primeiro executar as dependências:**

* npm init -y
* npm install readline-sync
* npm install odata 

**Após instalar as dependências, para executar a aplicação, execute o comando:**

* node .\src\index.js

**Será solicitado para escolher uma opção, dentre elas:**

- [1] Consultar nome e sobrenome: ( Pede-se para usar o nome "Henry")
- [2] Incluir Pessoa ( Não se esqueça do UserName para então depois excluir)
- [3] Excluir Pessoa ( A exclusão é feita a partir do UserName)
- [4] Consultar todos os aeroportos que o endereco da localizacao contenha a palavra:  District
- [0] CANCEL

**Observações:**

* A busca na API é Case Sensitive. 
* Quando tentei enviar o MiddleName e Gender, estava dando erro, então deixei comentado por enquanto.
