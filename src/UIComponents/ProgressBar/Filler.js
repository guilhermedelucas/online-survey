import React from 'react';
import PropTypes from 'prop-types';
import './progress-bar.css';

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
