var campoFilmeFavorito = document.querySelector('#filme');

function adicionarFilme(){
  validaFilme(campoFilmeFavorito);
  campoFilmeFavorito.value = "";
}

function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes');
  var elementoFilme = "<img src=" + filme + ">";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

function validaFilme(){
    if (campoFilmeFavorito.value.endsWith('.jpg')){
      listarFilmesNaTela(campoFilmeFavorito.value);
    } else {
      alert ("Imagem inválida");  
    }
}