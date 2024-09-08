function pesquisar(){
        let section = document.getElementById("resultados-pesquisa") // Seleciona a seção onde os resultados serão exibidos

        let campoPesquisa = document.getElementById("campo-pesquisa").value

        campoPesquisa = campoPesquisa.toLowerCase();

        if (campoPesquisa == "") {
            section.innerHTML = "<p>Nenhum atetla encontrado</p>"
            return
        }
    
        let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa
        let titulo = "";
        let descricao = "";
        let tags = "";
    
        for (let dado of dados) { // Itera sobre cada dado da pesquisa
            titulo = dado.titulo.toLowerCase();
            descricao = dado.descricao.toLowerCase();
            tags = dado.tags.toLowerCase();
            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                resultados += `
                <div class="item-resultado">
                        <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
                 `;
            }
    }

    if(!resultados){
        resultados = "<p>Nenhum atetla encontrado</p>"
    }

    section.innerHTML = resultados // Atribui o HTML completo da lista de resultados à seção
    }
