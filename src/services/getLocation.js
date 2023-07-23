/* eslint-disable no-unused-vars */
export async function getLocation() {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lang = position.coords.longitude; 
          const coordenadas = { lat, lang };
          resolve(coordenadas);
        },
        (error) => {
          reject("Unable to retrieve your location");
        }
      );
    });
  } else {
    console.log("Geolocation not supported");
    return null;
  }
}
