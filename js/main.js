

// treasure coordinates
const WIDTH = 400;
const HEIGH = 400;

let target = {
  x: getNumeroAleatorio(WIDTH),
  y: getNumeroAleatorio(HEIGH)
};

// click handler
let $map = document.querySelector('#mapaDelTesoro'); // IMAGEN
let $distance = document.querySelector('#distance'); // PARRAFO
let clicks = 0;


$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;


  if (distance < 20 ) {
    alert(`Has Encontrado El tesoro en ${clicks} clicks!`);
    location.reload(); // Refrescar la pagina al ganar 
  }
});
