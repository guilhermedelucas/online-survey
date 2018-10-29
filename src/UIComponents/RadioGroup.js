import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './';

const RadioGroup = ({ label, onChange, value, options, ...props }) => {
	return (
		<React.Fragment>
		{
			options.map(({id, name}) => (
				<Label key={id} label={name} type="inline">
					<input
						type="radio"
						checked={value === id}
						onClick={e => onChange(id)}
						{...props}
					/>
				</Label>
			))
		}
		</React.Fragment>
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
