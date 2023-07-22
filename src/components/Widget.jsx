import { GetWeather } from "../services/GetWeather"
import { useState } from "react"

export const Widget = ({
    city,
}) => {

    const [data, setData] = useState(null)

  return (
    <div>
        <h1>{city}</h1>
        <GetWeather city={city} setData={setData} />
    </div>
  )
}