const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeAeroporto = (nome, local) => {
    const linha = document.createElement('tr');

    const conteudoLinha = `
    <td>${nome}</td>
    <td>${local}</td>
`
  
    linha.innerHTML = conteudoLinha;
    return linha;
  };
  
  listarAeroportos().then( exibe => {
  exibe.value.forEach(indice => {
    corpoTabela.appendChild(exibeAeroporto(indice.Name, indice.Location.Address))
  })
 }

 )