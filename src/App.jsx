import './App.css'
import { useEffect, useState } from 'react'
import { getCity } from './services/getCity'
import { getWeather } from './services/getWeather'
import { Data } from './components/Data'
import { ErrorMessage } from './components/ErrorMessage'

function App() {

  const [clima, setClima] = useState(null)
  const [loading, setLoading] = useState(null)

  let obtenerClima = async() => {
    setLoading(true);
    let ciudad = await getCity();
    let clima = await getWeather(ciudad);
    if (ciudad === null || clima === null) {
      console.log('Error al obtener los datos');
      return;
    }
    setLoading(false);
    setClima(clima);
  }

  useEffect(() => {
    obtenerClima();

    const interval = setInterval(() => {
      obtenerClima();
      console.log('Actualizando...');
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      {clima !== null && <Data location={clima.location} current={clima.current} loading={loading}/>}
      {clima === null && <ErrorMessage />}
    </div>
  ) 
}

export default App
