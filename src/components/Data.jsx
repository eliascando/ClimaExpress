/* eslint-disable react/prop-types */
import { getLastUpdated } from "../services/getLastUpdated";
import './../css/Data.css'
import { getConditionCode, getIconCode, getUVDescription, getWindDirectionIcon } from "../services/conditionCodes";

export const Data = ({location, current, loading}) => {
  const {
    temp_c,
    condition,
    wind_kph,
    humidity,
    feelslike_c,
    last_updated,
    wind_dir,
    pressure_mb,
    uv
  } = current;
  const {
    name,
    region,
    country,
    localtime
  } = location;

  let formatDate = (date) => {
    let fecha = new Date(date);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', options);
  }

  return (
    <div className="data">
      <div className="info">
        <div className="widget-location">
          <h2>{name}, {region}, {country}</h2>
          <h3>{formatDate(localtime)}</h3>
        </div>
        <div className="widget-data">
          <i className={`bi ${getIconCode(condition.code)}`}></i> 
          <h1>{temp_c}°C</h1>
          <h2>{getConditionCode(condition.code)}</h2>
        </div>
        <div className="widget-info">
          <div className="viento">
            <i className="bi bi-wind"></i>
            <h5>Viento</h5>
            <p>{wind_kph} Km/h</p>
            <i className={`bi ${getWindDirectionIcon(wind_dir)}`}></i>
          </div>
          <div className="humedad">
            <i className="bi bi-droplet-half"></i>
            <h5>Humedad</h5>
            <p>{humidity}%</p>
          </div>
          <div className="sensacion">
            <i className="bi bi-thermometer-half"></i>
            <h5>Sensación</h5>
            <p>{feelslike_c}°C</p>
          </div>
          <div className="uv">
            <i className="bi bi-sun"></i>
            <h5>Indice UV</h5>
            <p>{getUVDescription(uv)}</p>
          </div>
          <div className="presion">
            <i className="bi bi-speedometer"></i>
            <h5>Presión ATM</h5>
            <p>{pressure_mb} mb</p>
          </div>
        </div> 
      </div>
      <span>Actualizado hace {getLastUpdated(last_updated)}</span>
    </div>
  );
};
