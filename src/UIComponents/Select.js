import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './';

const Select = ({ label, onChange, placeholder, value, options, ...props }) => {
	return (
		<Label label={label}>
			<select
				value={value}
				placeholder={placeholder}
				onChange={e => onChange(e.target.value)}
				{...props}
			>
				{ options.map(({id, label}) => <option key={id}>{label}</option>)}
			</select>
		</Label>
	);
};

export default Select;

Select.defaultProps = {
	label: '',
	onChange: () => {},
	placeholder: '',
	value: '',
	options: []
};

Select.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	options: PropTypes.array
}
