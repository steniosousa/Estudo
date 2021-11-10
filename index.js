// $('input').on('change', function() {
//     $('body').toggleClass('blue');
//   });

//   var texto = document.querySelector("#teste").innerHTML;
//   var Identado = texto ;
//   var result;
  
//   var count = 0;
//   function digitar() {
//     result = document.getElementById("result");
//     window.setTimeout(function() { inserir(Identado[count]) }, 80);
//   }
//   function inserir(letra) {
//     result.innerHTML += letra;
//     count++;
//     if(count < Identado.length)
//       window.setTimeout(function() { inserir(Identado[count]) }, 80);
//   }
//   window.onload = digitar; 
  
//   function scrollToIdOnClick(event){
//     event.preventDefault();
//     var element = event.target;
//     var id = element.getAttribute('href');
//     var to = document.querySelector(id).offsetTop;
//     window.scroll({
//     top: to,
//     behavior:"smooth"
//     });
//     }
//     var menuItens = document.querySelectorAll(' p');
// menuItens.forEach(item => {
//     item.addEventListener('click', scrollToIdOnClick);
// })



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

function desafios() {
  alert("Indiponíveis no momento");
}
function ler(){
  let ler = document.querySelector("#ler");
  ler.style.display="inline";

  let iniciar = document.querySelector(".iniciar");
  iniciar.addEventListener("click", function
  (e){
    let ler = document.querySelector("#ler");
  ler.style.display="none";

  })
}

  

function Mudarestado1(el) {
  var display = document.getElementById(el).style.display;
  if(display == "none")
      document.getElementById(el).style.display = 'block';
  else
      document.getElementById(el).style.display = 'none';
}

function Mudarestado2(el) {
  var display = document.getElementById(el).style.display;
  if(display == "none")
      document.getElementById(el).style.display = 'block';
  else
      document.getElementById(el).style.display = 'none';
}

function Mudarestado3(el) {
  var display = document.getElementById(el).style.display;
  if(display == "none")
      document.getElementById(el).style.display = 'block';
  else
      document.getElementById(el).style.display = 'none';
}

function Mudarestado4(el) {
  var display = document.getElementById(el).style.display;
  if(display == "none")
      document.getElementById(el).style.display = 'block';
  else
      document.getElementById(el).style.display = 'none';
}

function Mudarestado5(el) {
  var display = document.getElementById(el).style.display;
  if(display == "none")
      document.getElementById(el).style.display = 'block';
  else
      document.getElementById(el).style.display = 'none';
}

function Mudarestado6(el) {
  var display = document.getElementById(el).style.display;
  if(display == "none")
      document.getElementById(el).style.display = 'block';
  else
      document.getElementById(el).style.display = 'none';
}
 













