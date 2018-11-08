import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, label, onChange, ...props }) => {
	return (
		<button type={type} onClick={onChange} {...props}>
			{label}
		</button>
	);
};

export default Button;

Button.defaultProps = {
	type: 'default',
	label: ''
};

Button.propTypes = {
	type: PropTypes.oneOf(['primary', 'secondary']),
	label: PropTypes.string
}
