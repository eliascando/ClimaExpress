import { config } from "../../env.config"
const { API_URL, API_KEY } = config;
import { getLocation } from "./getLocation";

export async function getCity(){
  const {lat, lang} = await getLocation();
  try{
    let response = await fetch(`${API_URL}search.json?q=${lat},${lang}&key=${API_KEY}`,
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
      return data[0].url;
    }
  }catch(error){
    console.log(error);
  }
}