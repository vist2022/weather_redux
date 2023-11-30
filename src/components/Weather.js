import React from 'react';
import {useSelector} from "react-redux";

const Weather = () =>

{
   const  weatherInfo= useSelector(state => state.weather);

    return (
        <div className={'weatherInfo'} >
            {!weatherInfo.message &&
                <div>
                    <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
                    <p>Temperature: {weatherInfo.temperature}<sup>o</sup>C</p>
                    <p>Pressure: {weatherInfo.pressure}</p>
                    <p>Sunset: {new Date(weatherInfo.sunset*1000).toTimeString()}</p>
                </div>
            }
            <p>{weatherInfo.message}</p>
        </div>
    )
};

export default Weather;