import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './';

const TextInput = ({ label, onChange, value, ...props }) => {
	return (
		<Label label={label}>
			<input
				type="text"
				className="question-text"
				value={value}
				onChange={e => onChange(e.target.value)}
				{...props}
			/>
		</Label>
	);
};

export default TextInput;

TextInput.defaultProps = {
	label: '',
	onChange: () => {},
	value: ''
};

TextInput.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string
}
