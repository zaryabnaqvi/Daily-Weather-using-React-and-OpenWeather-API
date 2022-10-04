import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function WeatherItem(props) {
    const{report} = props;
    
    
    const [cTime, setTime] = useState(new Date());
    
    useEffect(() => {
        setTime(new Date());
       // eslint-disable-next-line
    });
    const getDayInString=(num)=>{
        switch (num) {
            case 1:
                return 'Mon';
                break;
            case 2:
                return 'Tue';
                break;            
            case 3:
                return 'Wed';
                break;
            case 4:
                return 'Thu';
                break;
            case 5:
                return 'Fri';
                break; 
            case 6:
                return 'Sat';
                break;
            case 7:
                return 'Sun';
                break;
            default:
                return "";
                break;
        }


    }
    return (
        report && <>
            <section>
                <div className="container-fluid py-3 ">

                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4">

                            <div className="card shadow" style={{ color: '#4B515D', borderRadius: '35px' }}>
                                <div className="card-body p-4">

                                    <div className="d-flex">
                                        <h6 className="flex-grow-1">{`${report.name},${report.sys.country}`}</h6>
                                        <h6>{`${getDayInString(cTime.getDay())},${cTime.getHours()}:${cTime.getMinutes()}`}</h6>
                                    </div>

                                    <div className="d-flex flex-column text-center mt-5 mb-4">
                                        <h6 className="display-4 mb-0 font-weight-bold" style={{ color: "#1C2331" }}> {parseInt(report.main.temp)-273}°C </h6>
                                        <span className="small" style={{ color: "#868B94" }}>{parseInt(report.main.feels_like)-273}°C</span>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                                            <div><i className="fas fa-wind fa-fw" style={{ color: "#868B94" }}></i> <span className="ms-1"> {report.wind.speed} km/h
                                            </span></div>
                                            <div><i className="fas fa-tint fa-fw" style={{ color: "#868B94" }}></i> <span className="ms-1"> {report.main.humidity}% </span>
                                            </div>
                                            <div><i className="fas fa-sun fa-fw" style={{ color: "#868B94" }}></i> <span className="ms-1"> {report.weather[0].description} </span>
                                            </div>
                                        </div>
                                        <div>
                                            <img  class="shadow" src={`http://openweathermap.org/img/wn/${report.weather[0].icon}@2x.png`}
                                                width="100px" alt='weather-icon' />
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-light my-3">

                                        <li className='list-group-item px-3'><div className="float-start"></div>Humidity<div className='float-end'>{report.main.humidity}</div></li>
                                        <li className='list-group-item px-3'><div className="float-start"></div>Feel`s like<div className='float-end'>{report.main.feels_like-273}°C</div></li>
                                        <li className='list-group-item px-3'><div className="float-start"></div>Visibility<div className='float-end'>{report.visibility}</div></li>
                                        <li className='list-group-item px-3'><div className="float-start"></div>Pressure<div className='float-end'>{report.main.pressure} hPa</div></li>
                                       
                                    </ul>
                                    
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
