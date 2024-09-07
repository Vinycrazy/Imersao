
//Pesquisa com enter do teclado
let campoPesquisa = document.getElementById("campo-pesquisa");

campoPesquisa.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    pesquisar();
  }
});

function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena em uma variável
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //Se o campoPesquisa for uma string sem nada 
  if(!campoPesquisa) {
    section.innerHTML = "Opa,nenhum craque foi encontrado.Você precisa digitar para fazer a busca"
return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

    // Cria uma string vazia para armazenar o HTML dos resultados
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
  
    // Itera sobre cada item do array 'dados'
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      //Se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        //Cria um novo elemento
        resultado += `
        <div class="item-resultado">
         <img src="${dado.imagem}" alt="${dado.titulo}" class="jogador-imagem">
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
          <p>Idade: ${dado.idade} anos</p> </div>
        </div>
      `;
      }
      
    }

    // Verifica se algum resultado foi encontrado
    if (resultado === "") {
      // Cria um elemento <p> para a mensagem
      const mensagem = document.createElement('p');
      mensagem.textContent = "Opa, nenhum craque foi encontrado. Você precisa digitar para fazer a busca";
      mensagem.classList.add('mensagem-sem-resultados'); // Adiciona uma classe para estilização

    // Adiciona a mensagem ao elemento de resultados
    section.appendChild(mensagem);
  } else {
  
    // Limpa a seção de resultados antes de adicionar os novos resultados
    section.innerHTML = "";
    // Atribui o HTML gerado ao conteúdo do elemento 'section'
    section.innerHTML = resultado;
  }
}





