import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './';

const Select = ({ label, onChange, placeholder, value, options, ...props }) => {
	return (
		<Label label={label}>
			<select
				className="question-select w-full"
				value={value}
				placeholder={placeholder}
				onChange={e => onChange(e.target.value)}
				{...props}
			>
				{ <option disabled value="">Select an option</option> }
				{ options.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
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
