import './App.css'
import { useState } from 'react'
import { getCity } from './services/getCity'
import { getWeather } from './services/getWeather'
import { Data } from './components/Data'

function App() {

  const [clima, setClima] = useState(null)
  const [loading, setLoading] = useState(null)

  let obtenerClima = async() => {
    setLoading(true);
    let ciudad = await getCity();
    let clima = await getWeather(ciudad);
    setLoading(false);
    console.log(clima);
    setClima(clima);
  }
  
  return (
    <div>
      <h1>Clima Express</h1>  
      <button onClick={()=>{obtenerClima()}}>{clima? 'Actualizar Clima' : 'Obtener Clima'}</button>
      {loading && <p>Cargando...</p>}
      {clima !== null && <Data location={clima.location} current={clima.current}/>}
    </div>
  ) 
}

export default App
