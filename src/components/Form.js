import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getWeatherAction} from "../redux/actions/weatherAction";

const Form = () => {
	const [city, setCity] = useState('');

	const dispatch = useDispatch();

	return (
		<form onSubmit={(e)=>{
			e.preventDefault();
			dispatch(getWeatherAction(city))
		}}>
			<div>
				<input
				type={'text'}
				name={'city'}
				placeholder={'Enter city'}
				onChange={e => setCity(e.currentTarget.value.trim())}
			/>
			</div>
			<div>
				<button type={'submit'}>Get weather</button>
			</div>
		</form>
	);
};

export default Form;