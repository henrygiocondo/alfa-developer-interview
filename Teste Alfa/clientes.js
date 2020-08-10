const informacoesClientes = [
 
];

const exibeCliente = (cpf, nome) => {
  const linha = document.createElement("tr");
  const conteudoLinha = `
  <td>${cpf}</td>
  <td>${nome}</td>
  `;

  linha.innerHTML = conteudoLinha;
  return linha;
};

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

informacoesClientes.forEach(indice => {
  corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
})


