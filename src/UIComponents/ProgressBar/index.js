import React from 'react';
import PropTypes from 'prop-types';
import Filler from './Filler';

const ProgressBar = ({ percentage }) => {
	return (
		<div className="progress-bar">
			<Filler percentage={percentage}/>
		</div>
	)
};

export default ProgressBar;

ProgressBar.defaultProps = {
	percentage: 0
};

ProgressBar.propTypes = {
	percentage: PropTypes.number
}
