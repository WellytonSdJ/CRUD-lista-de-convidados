var convidados = JSON.parse(localStorage.getItem("convidados") || []);

var elLista = document.getElementById("lista");
var elCampoNome = document.getElementById("campo")
var elBotaoAdd = document.getElementById("add")

function salvarConvidados(){
  localStorage.setItem("convidados", JSON.stringify(convidados));
}


function listar (){
  elLista.innerHTML= "";
  
  for (const convidado of convidados) {
    var elConvidado = document.createElement("li");
    var elNome = document.createTextNode(convidado.nome);
    var elExcluir = document.createElement('a');
    elExcluir.setAttribute("href", "#")
    var elExcluirTexto = document.createTextNode('Excluir');
  
    elExcluir.onclick = function(){
      convidados = convidados.filter(function(item){
        return item.nome !== convidado.nome;
      })
      salvarConvidados();
      listar();
    }

    elLista.appendChild(elConvidado)
    elConvidado.appendChild(elNome)
    elConvidado.appendChild(elExcluir)
    elExcluir.appendChild(elExcluirTexto)
  }
}
listar();

var adicionar = function(){
  
  var nome = elCampoNome.value;
  convidados.push({nome: nome})
  elCampoNome.value = ''
  salvarConvidados();
  listar();
  
}

elBotaoAdd.onclick = adicionar;