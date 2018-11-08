import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ type, label, children, ...props }) => {
	return <label className="flex flex-row w-full"{...props}>{children}{label}</label>;
};

export default Label;

Label.defaultProps = {
	type: 'default',
	label: ''
};

Label.propTypes = {
	type: PropTypes.oneOf(['inline', 'default']),
	label: PropTypes.string
}
