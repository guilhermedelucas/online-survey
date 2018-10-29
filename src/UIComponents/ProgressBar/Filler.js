import React from 'react';
import PropTypes from 'prop-types';

const Filler = ({ percentage }) => {
	return (
		<div className="" style={{ width: `${percentage}%`, background: 'rgb(72, 76, 139)', height: '100%', borderRadius: 'inherit' }} />
	)
};

export default Filler;

Filler.defaultProps = {
	percentage: 0
};

Filler.propTypes = {
	percentage: PropTypes.number
}
