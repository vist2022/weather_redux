import {applyMiddleware, createStore} from "redux";
import weatherReducer from "./redusers/weatherReduser";
import thunk from "redux-thunk";
import {logger} from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState =
	{
		weather:	{
			temperature: null,
			city: null,
			country: null,
			pressure: null,
			sunset: null,
			message: 'Enter city name'
		}

	}

const store = createStore(weatherReducer, initialState, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;