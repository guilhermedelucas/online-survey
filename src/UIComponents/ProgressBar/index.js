import React from 'react';
import PropTypes from 'prop-types';
import Filler from './Filler';

const ProgressBar = ({ percentage }) => {
	return (
		<div className="" style={{ position: 'relative', height: '20px', width: '350px', borderRadius: '50px', border: '1px solid #333'}}>
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
