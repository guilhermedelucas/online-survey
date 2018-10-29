import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import questions from './questions.json';
import { ProgressBar, InputType, Button } from './UIComponents';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
			questions,
			answer: '',
			answers: []
		};
		this.handleAnswer = this.handleAnswer.bind(this);
		this.handleBackButton = this.handleBackButton.bind(this);
		this.handleNextButton = this.handleNextButton.bind(this);
	}

	handleAnswer(answer) {
		this.setState({ answer })
	}

	handleBackButton() {
		const { questions, answer, counter } = this.state;
		this.setState({
			questions: questions.map((question, index) => index === counter ? {...question, answer } : question ),
			answer: questions[counter - 1].answer,
			counter: counter - 1
		})
	}

	handleNextButton() {
		const { questions, answer, counter } = this.state;
		this.setState({
			questions: questions.map((question, index) => index === counter ? {...question, answer } : question ),
			answer: questions[counter].answer,
			counter: counter + 1
		})
	}

	render() {
		const { questions, answers, answer, counter } = this.state;
		const displayQuestion = questions[counter];

		console.log(questions);

		return (
			<div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
				<div>
					<p>{question}</p>
					<p>{!!options.length ? options.find(option => option.id === answer).name : answer}</p>
				</div>
			))
		}
	</React.Fragment>
);

const Title = ({ counter, questions }) => {
	if (counter === questions.length) {
		return <h1>Questionaire summary</h1>
	}
	return <h1>{questions[counter].question}</h1>

}
