export function getLastUpdated(last_updated) {
  if (!last_updated) return '';
  let fechaActual = new Date();
  let fechaActualizacion = new Date(last_updated.replace(' ', 'T'));
  
  if (isNaN(fechaActualizacion.getTime())) {
    return '';
  }

  let tiempoTranscurrido = fechaActual - fechaActualizacion;
  let segundos = Math.floor(tiempoTranscurrido / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);
  let meses = Math.floor(dias / 31);
  let años = Math.floor(meses / 12);
  let tiempo = '';
  if (años > 0) {
    tiempo = `${años} año(s)`;
  } else if (meses > 0) {
    tiempo = `${meses} mes(es)`;
  } else if (dias > 0) {
    tiempo = `${dias} día(s)`;
  } else if (horas > 0) {
    tiempo = `${horas} hora(s)`;
  } else if (minutos > 0) {
    tiempo = `${minutos} minuto(s)`;
  } else if (segundos > 0) {
    tiempo = `${segundos} segundo(s)`;
  } else {
    tiempo = 'justo ahora';
  }
  
  return tiempo;
}
