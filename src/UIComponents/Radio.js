import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './';

const Radio = ({ label, onChange, checked, value, ...props }) => {
	return (
		<Label label={label} type="inline">
			<input
				type="radio"
				value={value}
				checked={checked}
				onChange={e => onChange(e.target.checked)}
				{...props}
			/>
		</Label>
	);
};

export default Radio;

Radio.defaultProps = {
	label: '',
	onChange: () => {},
	value: '',
	checked: false,
};

Radio.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string,
	checked: PropTypes.bool
}
