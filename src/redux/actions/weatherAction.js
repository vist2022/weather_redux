import {api_key, base_url} from "../../utils/constants";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getWeatherAction = createAsyncThunk
('weather/fetchWeather', (city) => {

	return fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
		.then(response => response.json())
		.then(data => ({
			temperature: data.main.temp,
			city: data.name,
			country: data.sys.country,
			pressure: data.main.pressure,
			sunset: data.sys.sunset,
			message: null
		}))
})