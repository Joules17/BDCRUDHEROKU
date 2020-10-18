console.log('holaaa');

var formulario = document.getElementById('contact');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('me diste un click');


  fetch('/basedatos/consultatotalpacientes')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

    console.log('consultando...');
});
