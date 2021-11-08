$('input').on('change', function() {
    $('body').toggleClass('blue');
  });

  var texto = "Ajude-nos a levar esperança às vítimas das guerras.";
  var Identado = texto ;
  var result;
  
  var count = 0;
  function digitar() {
    result = document.getElementById("result");
    window.setTimeout(function() { inserir(Identado[count]) }, 80);
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
  let introdução = document.querySelector(".abrirIntrodução");
  let about = document.querySelector(".abrirAbout");
  let sintaxe = document.querySelector(".abrirSintaxe");
  let condicionais = document.querySelector(".abrirCondicionais");
  let laços = document.querySelector(".abrirLaços");
  let funcoes = document.querySelector(".abrirfuncoes");
  introdução.style.display="";
  about.style.display="none";
  sintaxe.style.display="none";
  condicionais.style.display="none";
  laços.style.display="none";
  funcoes.style.display="none";
}
function oQue(){
  let introdução = document.querySelector(".abrirIntrodução");
  let about = document.querySelector(".abrirAbout");
  let sintaxe = document.querySelector(".abrirSintaxe");
  let condicionais = document.querySelector(".abrirCondicionais");
  let laços = document.querySelector(".abrirLaços");
  let funcoes = document.querySelector(".abrirfuncoes");
  introdução.style.display="none";
  about.style.display="";
  sintaxe.style.display="none";
  condicionais.style.display="none";
  laços.style.display="none";
  funcoes.style.display="none";
}
function sintaxe(){
  let introdução = document.querySelector(".abrirIntrodução");
  let about = document.querySelector(".abrirAbout");
  let sintaxe = document.querySelector(".abrirSintaxe");
  let condicionais = document.querySelector(".abrirCondicionais");
  let laços = document.querySelector(".abrirLaços");
  let funcoes = document.querySelector(".abrirfuncoes");
  introdução.style.display="none";
  about.style.display="none";
  sintaxe.style.display="";
  condicionais.style.display="none";
  laços.style.display="none";
  funcoes.style.display="none";
}
function condicionais(){
  let introdução = document.querySelector(".abrirIntrodução");
  let about = document.querySelector(".abrirAbout");
  let sintaxe = document.querySelector(".abrirSintaxe");
  let condicionais = document.querySelector(".abrirCondicionais");
  let laços = document.querySelector(".abrirLaços");
  let funcoes = document.querySelector(".abrirfuncoes");
  introdução.style.display="none";
  about.style.display="none";
  sintaxe.style.display="none";
  condicionais.style.display="";
  laços.style.display="none";
  funcoes.style.display="none";
}
function laços(){
  let introdução = document.querySelector(".abrirIntrodução");
  let about = document.querySelector(".abrirAbout");
  let sintaxe = document.querySelector(".abrirSintaxe");
  let condicionais = document.querySelector(".abrirCondicionais");
  let laços = document.querySelector(".abrirLaços");
  let funcoes = document.querySelector(".abrirfuncoes");
  introdução.style.display="none";
  about.style.display="none";
  sintaxe.style.display="none";
  condicionais.style.display="none";
  laços.style.display="";
  funcoes.style.display="none";
}
function funcoes(){
  let introdução = document.querySelector(".abrirIntrodução");
  let about = document.querySelector(".abrirAbout");
  let sintaxe = document.querySelector(".abrirSintaxe");
  let condicionais = document.querySelector(".abrirCondicionais");
  let laços = document.querySelector(".abrirLaços");
  let funcoes = document.querySelector(".abrirfuncoes");
  introdução.style.display="none";
  about.style.display="none";
  sintaxe.style.display="none";
  condicionais.style.display="none";
  laços.style.display="none";
  funcoes.style.display="";

}

// function myFunction() {
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           li[i].style.display = "";
//       } else {
//           li[i].style.display = "none";
//       }
//   }
// }
function doar(){
  let doar = document.querySelector(".desafios");
  let limpar = document.querySelector(".container");
  let limpar2 = document.querySelector(".documentação");
  let limpar3 = document.querySelector(".conteúdo");
  let limpar4 = document.querySelector(".lista");
  limpar.style.display="none";
  limpar2.style.display="none";
  limpar3.style.display="none";
  limpar4.style.display="none";

  doar.style.display="";

}
function sala(){
  let doar = document.querySelector(".desafios");
  let limpar = document.querySelector(".container");
  let limpar2 = document.querySelector(".documentação");
  let limpar3 = document.querySelector(".conteúdo");
  let limpar4 = document.querySelector(".lista");
  limpar.style.display="";
  limpar2.style.display="";
  limpar3.style.display="";
  limpar4.style.display="";

  doar.style.display="none";

}
