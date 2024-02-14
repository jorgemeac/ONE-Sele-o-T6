//mostrar e ocultar as divs da <aside> 
function mostrarDiv(id) {
  document.querySelectorAll('#um, #dois, #tres').forEach(function (div) {
    div.style.visibility = 'hidden';
    div.style.opacity = 0;
  });

  document.getElementById(id).style.visibility = 'visible';
  document.getElementById(id).style.opacity = 1;
}

//oculta o texto no <textarea> ao clicar, reaparece ao clicar fora e estiver limpo 
document.addEventListener('DOMContentLoaded', function () {
  let textoInicial = 'Escreva ou cole seu texto aqui.';
  let textoPadrao = document.getElementById('texto-inicial');
  textoPadrao.innerHTML = textoInicial;
  textoPadrao.addEventListener('focus', function () {
    if (textoPadrao.value === textoInicial) {
      textoPadrao.value = '';
    }
  });
  textoPadrao.addEventListener('blur', function () {
    if (textoPadrao.value === '') {
      textoPadrao.value = textoInicial;
    }
  });

  //não permite a digitação de letras maiúsculas ou acentuadas 

  let textoDigitado = document.getElementById('texto-inicial');
  textoDigitado.addEventListener('input', function () {
    let valorInserido = textoDigitado.value;
    let novoValor = valorInserido.replace(/[^a-z\s.,;!?'"]/g, '');
    textoDigitado.value = novoValor;
  })

});


//Botão criptografar texto 

function criptografarTexto() {
  let novoValor = document.getElementById('texto-inicial');
  let texto = novoValor.value;

  texto = texto.replace(/e/g, 'enter');
  texto = texto.replace(/i/g, 'imes');
  texto = texto.replace(/a/g, 'ai');
  texto = texto.replace(/o/g, 'ober');
  texto = texto.replace(/u/g, 'ufat');

  document.getElementById('texto-criptografado').innerHTML = texto;

  document.getElementById('texto-inicial').value = '';
}

//Botão descriptografar texto 
function descriptografarTexto() {
  let novoValor = document.getElementById('texto-inicial');
  let texto = novoValor.value;

  texto = texto.replace(/enter/g, 'e');
  texto = texto.replace(/imes/g, 'i');
  texto = texto.replace(/ai/g, 'a');
  texto = texto.replace(/ober/g, 'o');
  texto = texto.replace(/ufat/g, 'u');

  document.getElementById('texto-inicial').value = '';

  document.getElementById('texto-descriptografado').innerHTML = texto;
}

//botão copiar
async function copiarTexto() {
  var textoCriptografado = document.getElementById('texto-criptografado').innerText;

  try {
    await navigator.clipboard.writeText(textoCriptografado);

    alert('Texto copiado para a área de transferência!');

  } catch (err) {
    console.error('Erro ao copiar texto: ', err);
    alert('Erro ao copiar texto. Tente novamente.');
  }

}

