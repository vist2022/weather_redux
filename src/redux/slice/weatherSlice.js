import {createSlice} from "@reduxjs/toolkit";
import {getWeatherAction} from "../actions/weatherAction";

const weatherSlice = createSlice(
	{
		name: 'weather',
		initialState:
			{
				weather: {
					temperature: null,
					city: null,
					country: null,
					pressure: null,
					sunset: null,
					message: 'Enter city name'
				}
			},
		extraReducers: builder => {
			builder
				.addCase(getWeatherAction.pending, state => {
					state.weather.message = 'Loading...';
				})
				.addCase(getWeatherAction.rejected, state => {
					state.weather.message = 'Enter correct city';
				})
				.addCase(getWeatherAction.fulfilled, (state, action) => {
					state.weather = action.payload
				})
		}
	}
)
export default weatherSlice.reducer;