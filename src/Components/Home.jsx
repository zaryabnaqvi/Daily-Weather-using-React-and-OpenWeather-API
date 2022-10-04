import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Spinner from './Spinner';
import WeatherItem from './WeatherItem'

export default function Home(props) {
  const REACT_APP_WEATHER_API='5a137068e560190e30f90ffe03ac1d49';
  let [loading,setLoading]=useState(false)
  let [report, setReport] = useState(null);
  const [city,SetCity]=useState(localStorage.getItem("city"));

  const FetchingReport = async () => {
    if(!city){
    navigator.geolocation.getCurrentPosition(async (position) => {
      setLoading(true);
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${REACT_APP_WEATHER_API}`);
      const json = await data.json();
      console.log(json);
      setLoading(false);
      if (json) {
        setReport(json);
      }
    });
}else{
  setLoading(true);
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_WEATHER_API}`);
      const json = await data.json();
      console.log(json);
      setLoading(false);
      if (json) {
        setReport(json);
        console.log(typeof json)
      }

  }
}
  useEffect(() => {
    FetchingReport();
  }, [city])
  return (
    <>
      <div className='container'>
        <h1 className='text-dark pt-3 text-center'>Weather</h1>
        {loading&&<Spinner/>}
        {!loading&&<WeatherItem report={report}/>}
      </div>
    </>)
}
