import {api_key, base_url} from "../../utils/constants";

export const PUT_WEATHER_INFO = 'PUT_WEATHER_INFO';
export const ERROR_WEATHER_INFO = 'ERROR_WEATHER_INFO';

export const WEATHER_INFO_REQUEST = 'WEATHER_INFO_REQUEST';

export const errorWeatherAction = error =>
	({
		type: ERROR_WEATHER_INFO,
		payload: error
	});

export const weatherRequestAction = () =>
	({
		type: WEATHER_INFO_REQUEST,
		payload: 'Loading......'
	})

export const putWeatherInfoAction = data =>
	({
		type: PUT_WEATHER_INFO,
		payload: data
	})

export const getWeatherAction = city => {
	return dispatch => {
		dispatch(weatherRequestAction());
		try {
			fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
				.then(response => response.json())
				.then(data => {
					const weather =
						{
								temperature: data.main.temp,
								city: data.name,
								country: data.sys.country,
								pressure: data.main.pressure,
								sunset: data.sys.sunset,
								message: null
						}
					dispatch(putWeatherInfoAction(weather))
				 }).catch(e=>dispatch(errorWeatherAction('Enter correct city name')))
		} catch (e) {
			dispatch(errorWeatherAction('Enter correct city name'))

		}
	}

}