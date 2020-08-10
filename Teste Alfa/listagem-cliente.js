const removeCliente = (id) => {
  if(confirm("Deseja deletar o cliente ?")){
    debugger;
    deletaCliente(id)
    window.location.reload()
  }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");


const exibeCliente = (nome, sobrenome, id) => {
    const linha = document.createElement('tr');

    const conteudoLinha = `
    <td>${nome}</td>
    <td>${sobrenome}</td>
    <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
    
    
`
  
    linha.innerHTML = conteudoLinha;
    return linha;
  };
  
  listarClientes().then( exibe => {
  exibe.value.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.FirstName, indice.LastName, indice.UserName))
  })
 }

 )
 const exibeClientePorNome = (nome, sobrenome, id) => {
  const linha = document.createElement('tr');

  const conteudoLinha = `
  <td>${nome}</td>
  <td>${sobrenome}</td>
  <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
  
  
`

  linha.innerHTML = conteudoLinha;
  return linha;
};

listarClientesPorNome().then( exibe => {
exibe.value.forEach(indice => {
  corpoTabela.appendChild(exibeCliente(indice.FirstName, indice.LastName, indice.UserName))
})
}

)
  
  
 

