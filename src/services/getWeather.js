import { config } from "../../env.config"
const { API_URL, API_KEY } = config;

export async function getWeather(ciudad){
    try{
        let response = await fetch(`${API_URL}current.json?q=${ciudad}&key=${API_KEY}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        let data = await response.json();
    
        if(data.error){
          return data.error.message;
        }else{
          return data;
        }
      }catch(error){
        console.log(error);
      }
}