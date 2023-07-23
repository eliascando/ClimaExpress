/* eslint-disable react/prop-types */
import { getLastUpdated } from "../services/getLastUpdated";

export const Data = ({location, current}) => {
  const {
    temp_c,
    condition,
    wind_kph,
    humidity,
    feelslike_c,
    last_updated,
  } = current;
  const {
    name,
    region,
    country,
    localtime
  } = location;

  function formatDate(date){
    let fecha = new Date(date);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', options);
  }


  return (
    <div>
      <img src={condition.icon} alt={condition.text} />
      <h3>{name}, {region}, {country}</h3>
      <h4>{formatDate(localtime)}</h4>
      <p>Temperatura: {temp_c}°C</p>
      <p>Condición: {condition.text}</p>
      <p>Viento: {wind_kph} kph</p>
      <p>Humedad: {humidity}%</p>
      <p>Sensación: {feelslike_c}°C</p>
      <p>Actualizado hace {getLastUpdated(last_updated)}</p>
    </div>
  );
};
