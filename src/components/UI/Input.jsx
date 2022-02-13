import React from 'react';
import './Input.css';

const Input = ({ input, label }) => {
	return (
		<div className='input'>
			<label htmlFor={input.id}>{label}</label>
			<input {...input} />
		</div>
	);
};

export default Input;