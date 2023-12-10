import React from 'react';
import {useSelector} from "react-redux";

const Weather = () =>

{
    const  weather= useSelector(state => state.weatherInfo.weather);
    return (
        <div className={'weatherInfo'} >
            {!weather.message &&
                <div>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temperature: {weather.temperature}<sup>o</sup>C</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset*1000).toTimeString()}</p>
                </div>
            }
            <p>{weather.message}</p>
        </div>
    )
};

export default Weather;