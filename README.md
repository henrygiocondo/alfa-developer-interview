# DEVELOPER INTERVIEW - RESOLUÇÃO DE LUCIANO LEAL

## Como executar

Assumindo que a máquina já tenha npm instalado, dentro da pasta do projeto rodar o comando:

`npm install`

em seguida:

`npm run start`

O prompt de comando irá exibir as mensagens conforme a API é consultada.

## Considerações Técnicas

Achei o desafio bem interessante, porque a API é um pouco diferente do que
estou acostumado: a 'chave' de uso é retornada via um redirect. Para tal,
usei o próprio https do Node onde isso fica bem fácil de detectar, e para as
outras chamadas usei o Axios. Em certo momento pensei em fazer tudo com https,
mas ficaria verboso demais.

Criei uma função 'logar' ao invés do console.log porque na minha experiência
no dia-a-dia sempre é necessário fazer isso ao invés de chamar direto o console.
Adicionei a hora na mensagem pra dar uma ideia de tempo de duração das requisições.

A busca de dados com o usuário 'Henry' não está retornando resultados (nem em minúsculo),
então deixei esse termo parametrizável, assim como o do endereço. Para buscar com
outros termos, utilizar usuario=valor ou endereco=valor para alterar o termo
da primeira e da quarta demanda, respectivamente.

`npm run start usuario=a`

ou

`npm run start usuario=a endereco=Road`

Quanto menos letras no termo, maior a chance de retornar algum resultado. A busca na API é case sentitive.

Espero que gostem do código, foi bem divertido fazer. Obrigado pela consideração!

Abraços,

Luciano Leal - http://LucianoLeal.com