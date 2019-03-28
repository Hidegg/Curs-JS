var inputlimbasiLiteraturaRomana = document.getElementById('limbasiLiteraturaRomana'),
    inputfranceza = document.getElementById('franceza'),
    inputengleza = document.getElementById('engleza'),
    inputmatematica = document.getElementById('matematica'),
    inputfizica = document.getElementById('fizica'),
    inputchimie = document.getElementById('chimie'),
    inputbiologie = document.getElementById('biologie'),
    inputistoria = document.getElementById('istoria'),
    inputgeografia = document.getElementById('geografia'),
    inputstiinteSocioUmane = document.getElementById('stiinteSocioUmane'),
    inputreligie = document.getElementById('religie'),
    inputeducatieMuzicala = document.getElementById('educatieMuzicala'),
    inputeducatiePlastica = document.getElementById('educatiePlastica'),
    inputsport = document.getElementById('sport'),
    inputinformatica = document.getElementById('informatica'),
    inputtic = document.getElementById('tic'),
    inputantreprenoriala = document.getElementById('antreprenoriala'),

    elementResult = document.getElementById('result'),
    form = document.querySelector('form');

    form.addEventListener('submit', function(e) {
      var limbasiLiteraturaRomana = inputlimbasiLiteraturaRomana.value || 0,
      franceza = inputfranceza.value || 0,
      engleza = inputengleza.value || 0,
      matematica = inputmatematica.value || 0,
      fizica = inputfizica.value || 0,
      chimie = inputchimie.value || 0,
      biologie = inputbiologie.value || 0,
      istoria = inputistoria.value || 0,
      geografia = inputgeografia.value || 0,
      stiinteSocioUmane = inputstiinteSocioUmane.value || 0,
      religie = inputreligie.value || 0,
      educatieMuzicala = inputeducatieMuzicala.value || 0,
      educatiePlastica = inputeducatiePlastica.value || 0,
      sport = inputsport.value || 0,
      informatica = inputinformatica.value || 0,
      tic = inputtic.value || 0,
      antreprenoriala = inputantreprenoriala.value || 0,

      result = (parseFloat(limbasiLiteraturaRomana) + parseFloat(franceza) + parseFloat(engleza) + parseFloat(matematica) + parseFloat(fizica) + parseFloat(chimie) + parseFloat(biologie) + parseFloat(istoria) + parseFloat(geografia) + parseFloat(stiinteSocioUmane) + parseFloat(religie) + parseFloat(educatieMuzicala) +parseFloat(educatiePlastica) + parseFloat(sport) + parseFloat(informatica) + parseFloat(tic) + parseFloat(antreprenoriala)) / 17;

      result = result.toFixed(2);

      if (result > 8.5) {
        alert ('Felicitari, ati obtinut medie de bursa!');
      }

      elementResult.innerText = result;

      e.preventDefault();
    }, false);
