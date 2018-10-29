import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import questions from './questions.json';
import { ProgressBar, InputType, Button } from './UIComponents';

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			counter: localStorage.getItem('counter') || 0,
			questions: JSON.parse(localStorage.getItem('questions')) || questions,
			answer: JSON.parse(localStorage.getItem('answer')) || '',
			answers: []
		};
		this.handleAnswer = this.handleAnswer.bind(this);
		this.handleBackButton = this.handleBackButton.bind(this);
		this.handleNextButton = this.handleNextButton.bind(this);
	}

	handleAnswer(answer) {
		this.setState({ answer }, () => localStorage.setItem('answer', JSON.stringify(this.state.answer)))
	}

	handleBackButton() {
		const { questions, answer, counter } = this.state;
		this.setState({
			questions: questions.map((question, index) => index === counter ? {...question, answer } : question ),
			answer: questions[counter - 1].answer,
			counter: counter - 1
		}, () => {
			localStorage.setItem('counter', this.state.counter);
			localStorage.setItem('questions', JSON.stringify(this.state.questions));
		})
	}

	handleNextButton() {
		const { questions, answer, counter } = this.state;
		this.setState({
			questions: questions.map((question, index) => index === counter ? {...question, answer } : question ),
			answer: questions[counter + 1].answer,
			counter: counter + 1
		}, () => {
			localStorage.setItem('counter', this.state.counter);
			localStorage.setItem('questions', JSON.stringify(this.state.questions));
		})
	}

	render() {
		const { questions, answers, answer, counter } = this.state;
		const displayQuestion = questions[counter];
		return (
			<div className="App flex flex-col align-center">
				<ProgressBar percentage={(counter/questions.length) * 100}/>
				<Title counter={counter} questions={questions} />
				{ counter === questions.length ? <Summary questions={questions} answers={answers} /> :
				<InputType
					type={displayQuestion.type}
					value={answer}
					options={displayQuestion.options}
					onChange={this.handleAnswer}
				/>
				}
				{ counter > 0 &&
					<Button
						type="secondary"
						label="Back"
						onClick={this.handleBackButton}
					/>
				}
				{
					counter < questions.length &&
					<Button
						type="primary"
						label={counter === (questions.length - 1) ? 'Show summary' : 'Next'}
						onClick={this.handleNextButton}
						disabled={!answer}
					/>
				}
			</div>
		);
	}
}
export default App;

const Summary = ({ questions }) => (
	<React.Fragment>
		{
			questions.map(({question, answer, options}, index) => (
				<div key={`summary+${index}`}>
					<p>{question}</p>
					<p>{!!options.length ? options.find(option => option.id === answer).name : answer}</p>
				</div>
			))
		}
	</React.Fragment>
);

const Title = ({ counter, questions }) => {
	if (counter === questions.length) {
		return <h2>Questionaire summary</h2>
	}
	return <h2>{questions[counter].question}</h2>

}
