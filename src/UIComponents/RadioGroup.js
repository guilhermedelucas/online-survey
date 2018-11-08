import React from 'react';
import PropTypes from 'prop-types';
import { Label, Radio } from './';

const RadioGroup = ({ label, onChange, value, options, ...props }) => {
	return (
		<div className="question-radio-group">
		{
			options.map(({id, name}) => (
				<Radio
					label={name}
					value={value}
					checked={value === id}
					onChange={e => onChange(id)}
					{...props}
				/>
			))
		}
	</div>
	);
};

export default RadioGroup;

RadioGroup.defaultProps = {
	label: '',
	onChange: () => {},
	value: '',
	options: []
};

RadioGroup.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string,
	options: PropTypes.array
}
