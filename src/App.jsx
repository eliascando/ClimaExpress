import './App.css'
import { useEffect, useState } from 'react'
import { getCity } from './services/getCity'
import { getWeather } from './services/getWeather'
import { Data } from './components/Data'
import { ErrorMessage } from './components/ErrorMessage'
import { Loading } from './components/Loading'

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
    setClima(clima);
    setLoading(false);
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
      {clima && <Data location={clima.location} current={clima.current}/>}
      {!clima && loading && <Loading />}
      {!clima && !loading && loading !== null && <ErrorMessage />}
    </div>
  ) 
}

export default App
