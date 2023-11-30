import {ERROR_WEATHER_INFO, PUT_WEATHER_INFO, WEATHER_INFO_REQUEST} from "../actions/weatherAction";

function weatherReducer(state, action) {
	switch (action.type) {
		case PUT_WEATHER_INFO:
			return { ...state, weather: action.payload };
		case ERROR_WEATHER_INFO:
			return { ...state, weather: { ...state.weather, message: action.payload } };
		case WEATHER_INFO_REQUEST:
			return { ...state, weather: { ...state.weather, message: action.payload } };
		default:
			return state;
	}
}

export default weatherReducer;