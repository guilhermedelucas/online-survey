import React from 'react';
import PropTypes from 'prop-types';
import { InputText, RadioGroup, Select } from './';

const InputType = ({ type, value, label, onChange, options, ...props }) => {
	switch(type) {
	default:
	case 'inputText':
		return (
			<InputText
				label={label}
				value={value}
				onChange={onChange}
			/>
		)
	case 'radioGroup':
		return (
			<RadioGroup
				label={label}
				value={value}
				options={options}
				onChange={onChange}
			/>
		)
	case 'select':
		return (
			<Select
				label={label}
				value={value}
				options={options}
				onChange={onChange}
			/>
		)
	}
};

export default InputType;

InputType.propTypes = {
	type: PropTypes.oneOf(['inputText', 'radioGroup', 'select', '']),
	value: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.array
};

InputType.defaultProps = {
	type: '',
	value: '',
	label: '',
	onChange: () => {},
	options: []
};
