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

<br />
<br />

#### QUESTÕES EXCLUSIVAS PARA DESENVOLVEDORES ADVPL

***1.*** Qual a finalidade dos arquivos abaixo no Protheus:
- SX1 - Arquivo de perguntas do sistema.
- SX2 - Arquivo de tabelas do sitema.
- SX3 - Arquivo de campos das tabelas do sistema.
- SIGAMAT.EMP - Arquivo que guarda as informações das empresas que serão controladas pelo sistema.
- SIGAADV.PSS - Arquivo de senhas do sistema, trabalha com o sigapss.spf

<br />

***2.*** Descreva, de forma breve, como criar um ambiente de testes, a partir de um ambiente de produção já em uso. Este ambiente de testes deve utilizar um banco de dados próprio (não pode utilizar o banco de dados da produção).
Cópia completa das pastas do sistema (Protheus e Protheus_Data), cópia do banco de dados de produção para replicar no banco de dados da base testes, configuração dos ini`s para direcionar aos novos caminhos dos binários/banco de dados.
<br />

***3.*** Como fazemos para consultar, instalar ou desinstalar Stored Procedures fornecidas pela Totvs ?
Pelo sigacfg base de dados -> dicionário -> stored procedures

<br />

***4.*** Para que servem as chaves abaixo, no arquivo APPSERVER.INI ?
* [PRODUCAO] -> Nome do ambiente 
* SourcePath=C:\Protheus_12_v16\apo	 -> diretorio do RPO
* RootPath=C:\Protheus_12_v16\protheus_data -> diretorio raiz do sistema
* StartPath=\system\ -> diretorio dos arquivos de configuração do sistema
* RpoDb=Top	 -> tipo do banco do RPO
* RpoLanguage=portuguese -> Idioma do rpo
* RpoVersion=120	 -> versao do RPO
* LocalFiles=ctree	 -> tipo de tabelas locais a serem utilizadas no ambiente
* localdbextension=.dtc	 -> extensão dos tipos de tabelas locais
* RegionalLanguage=BRA	 -> idioma da regiao
* helpserver=help.outsourcing.com.br/p11	 -> url de help
* TOPMEMOMEGA=1	 -> habilita campos memo até 1mb
* TopDataBase=MSSQL	 -> tipo de banco de dados
* TopServer=localhost	 -> endereço do banco de dados
* TopALIAS=PROTHEUSV12	 -> alias do banco de dados

<br />

***5.*** Descreva o que significa cada parte do código:
```ADVPL
Processa({||U_GPT(Cod)},"A executar")
```
* Processa -> função que monta regua de processamento	 
* {||}     -> bloco de código
* U_GPT    -> chamada da função de usuário GPT()
* Cod	     -> variavel que será usada como parametro para a função u_GPT()
* "A executar" -> mensagem exibida para o usuário enquanto a rotina é processada

<br />

***6.*** Qual é o erro do programa abaixo e como corrigí-lo?
```ADVPL
User Function Exemplo()
Local cPar := “Teste”
Modifica(cPar)//a função Modifica() deve alterar o valor de cPar
Return(cPar)
```
Deve-se chamar a função Modifica() assim = Modifica(@cPar)
<br />

***7.*** O que o programa abaixo faz?
```ADVPL
If SB1->B1_TIPO $ "PA/MC/"
 
   SB0->(DBSetOrder(1))
 
   If SB0->(DBSeek(xFilial("SB0")+SB1->B1_COD))
 
      RecLock("SB0",.F.)
 
      SB0->B0_PRV1 := SB1->B1_PRV1
 
      MsUnLock("SB0")
 
   Else 
 
      RecLock("SB0",.T.)                  
 
      SB0->B0_COD  := SB1->B1_COD    
 
      SB0->B0_PRV1 := SB1->B1_PRV1    
 
      MsUnLock("SB0")
 
   EndIf
 
EndIf
```
o fonte verifica se o tipo do produto é Produto Acabado ou MC (Não lembro a descrição desse).
se for PA ou MC altera o indice da tabela SB0 para buscar na tabela.
caso exista o cadastro do item na SB0, apenas altera o campo SB0->B0_PRV1 com o conteudo do campo SB1->B1_PRV1.
caso não exista o cadastro do item na SB0, é incluído.
e se não for tipo PA ou MC não faz nada.
