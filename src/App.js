import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import questions from './questions.json';
import { ProgressBar, Button } from './UIComponents';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
			questions,
		};
		this.handleAnswer = this.handleAnswer.bind(this);
		this.handleBackButton = this.handleBackButton.bind(this);
		this.handleBackButton = this.handleBackButton.bind(this);
	}

	handleAnswer(answer) {
		const { counter } = this.state;
		// let
		// this.setState({
		// 	answers: {...questions}
		// })
	}

	handleBackButton() {
		this.setState({
			counter: this.state.counter - 1
		})
	}

	handleNextButton() {
		this.setState({
			counter: this.state.counter + 1
		})
	}

	render() {
		const { questions, counter } = this.state;
		return (
			<div className="App">
				<ProgressBar percentage={(counter/questions.length) * 100}/>
				{/* <Question
					key={counter}
					question={questions[counter]}
				/> */}
				{ counter > 0 &&
					<Button
						type="secondary"
						label="Back"
						onClick={this.handleBackButton}
					/>
				}
				<Button
					type="primary"
					label="Next"
					onClick={this.handleBackButton}
					// disabled={!!question.answer}
				/>
			</div>
		);
	}
}
export default App;
