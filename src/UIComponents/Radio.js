import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './';

export default class Radio extends React.Component {
	constructor(props) {
		super(props);
		this.radioRef = React.createRef();
		this.handleClickBox = this.handleClickBox.bind(this);
	}

	handleClickBox(e) {
		this.radioRef.current.click()
	}

	render() {
		const { label, onChange, checked, value } = this.props;
		return (
			<div className="question-radio-box" onClick={this.handleClickBox}>
				<input
					ref={this.radioRef}
					className="question-radio"
					type="radio"
					value={value}
					checked={checked}
					onChange={e => onChange(e.target.checked)}
					{...this.props}
				/>
				<p>{label}</p>
			</div>
		);
	}
};

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
