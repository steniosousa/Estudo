$('input').on('change', function() {
    $('body').toggleClass('blue');
  });

  var texto = document.querySelector(".TextoJavaScript").innerHTML;
  var Identado = texto ;
  var result;
  
  var count = 0;
  function digitar() {
    result = document.getElementById("result");
    window.setTimeout(function() { inserir(Identado[count]) }, 00);
  }
  function inserir(letra) {
    result.innerHTML += letra;
    count++;
    if(count < Identado.length)
      window.setTimeout(function() { inserir(Identado[count]) }, 80);
  }
  window.onload = digitar; 
  
  function scrollToIdOnClick(event){
    event.preventDefault();
    var element = event.target;
    var id = element.getAttribute('href');
    var to = document.querySelector(id).offsetTop;
    window.scroll({
    top: to,
    behavior:"smooth"
    });
    }
    var menuItens = document.querySelectorAll(' p');
menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function introdução(){
  const introdução = document.querySelector(".abrirIntrodução");
  introdução.style.display="";
}
