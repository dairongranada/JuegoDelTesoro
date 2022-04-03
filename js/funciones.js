



// generate a random Number
let getNumeroAleatorio= size => {
  return Math.floor(Math.random() * size);
}

// obtener la distancia de dos puntos
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// devuelve un String dependiendo de las distancias
let getDistanceHint = distance => {
  if (distance < 30) {
    return "¡Hirviendo!";
  } else if (distance < 40) {
    return "Muy caliente";
  } else if (distance < 60) {
    return "caliente";
  } else if (distance < 100) {
    return "Cálido";
  } else if (distance < 180) {
    return "Frío";
  } else if (distance < 360) {
    return "Muy Frío";
  } else {
    return "Congelado!";
  }
}
