import {configureStore} from "@reduxjs/toolkit";
import weatherInfo from './slice/weatherSlice';


const store = configureStore(
	{
		reducer:{ weatherInfo}
	}
)

export default store;