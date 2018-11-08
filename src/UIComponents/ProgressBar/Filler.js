import React from 'react';
import PropTypes from 'prop-types';

const Filler = ({ percentage }) => {
	return (
		<div className="filler" style={{ width: `${percentage}%` }} />
	)
};

export default Filler;

Filler.defaultProps = {
	percentage: 0
};

Filler.propTypes = {
	percentage: PropTypes.number
}
