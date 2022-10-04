import React from 'react'

export default function About() {
  return (
    <div>
    <div className='container my-3 mt-5 rounded px-5 py-3' style={{backgroundColor:"rgb(225,255,255,0.6)"}}>
      <h1 className='text-center'>What is Daily Weather ?</h1>
      <p className='h4'>Weather is something everybody deals with, and accurate data of it like what is coming can help users to make inform decisions With Daily weather app , people can exactly know when to expect a change in the weather conditions. this apps can give urgent alerts too.This Application initally provide the weather of your geo-gobal-position then you can search for the Weather of any city in the world</p>
    </div>
    <div className='container my-3 mt-5 rounded px-5 py-3' style={{backgroundColor:"rgb(225,255,255,0.6)"}}>
      <h1 className='text-center'>What is Open Weather API ?</h1>
      <p className='h4'>OpenWeatherMap is one of the most popular choices for accessing high volumes of free weather data. The API's generous free plan allows users up to 60 calls per minute, including access to current weather data, forecasts, and weather maps</p>
    </div>
    </div>

  )
}
