import React, { Component } from 'react';
import logo from './logo.svg';
import questions from './questions.json';
import { ProgressBar, InputType, Button } from './UIComponents';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: this.getLocalStorageItem('counter') ? Number(this.getLocalStorageItem('counter')) : 0,
			questions: this.getLocalStorageItem('questions') ? this.getLocalStorageItem('questions') : questions,
			answer: this.getLocalStorageItem('answer') ? this.getLocalStorageItem('answer') : '',
			answers: []
		};
		this.handleAnswer = this.handleAnswer.bind(this);
		this.handleBackButton = this.handleBackButton.bind(this);
		this.handleNextButton = this.handleNextButton.bind(this);
	}

	getLocalStorageItem(key) {
		let item = localStorage.getItem(key);
		if (typeof item === 'string') {
			return JSON.parse(item)
		}
		return item
	}

	setLocalStorage(key, item) {
		localStorage.setItem(key, item);
	}

	handleAnswer(answer) {
		this.setState({ answer }, () => localStorage.setItem('answer', JSON.stringify(this.state.answer)))
	}

	handleBackButton() {
		const { questions, answer, counter } = this.state;
		console.log(questions, answer, counter);
		this.setState({
			questions: questions.map((question, index) => index === counter ? {...question, answer } : question ),
			answer: questions[counter - 1].answer,
			counter: counter - 1
		}, () => {
			this.setLocalStorage('counter', this.state.counter);
			this.setLocalStorage('answer', JSON.stringify(this.state.answer));
			this.setLocalStorage('questions', JSON.stringify(this.state.questions));
		})
	}

	handleNextButton() {
		const { questions, answer, counter } = this.state;
		this.setState({
			questions: questions.map((question, index) => index === counter ? {...question, answer } : question ),
			answer: questions[counter + 1] ? questions[counter + 1].answer : '',
			counter: counter + 1
		}, () => {
			this.setLocalStorage('counter', this.state.counter);
			this.setLocalStorage('answer', JSON.stringify(this.state.answer));
			this.setLocalStorage('questions', JSON.stringify(this.state.questions));
		})
	}

	render() {
		const { questions, answers, answer, counter } = this.state;
		const displayQuestion = questions[counter];
		return (
			<div style={{ backgroundColor: 'rgb(71, 71, 71)' }} className="flex flex-col h-screen justify-center">
				<div className="flex flex-col align-center justify-around" style={{ backgroundColor: 'white', borderRadius: '10px', padding: '4rem', border: '1px solid black', width: '80%', height: '80%', textAlign: 'center', margin: 'auto', overflowY: 'auto'}}>
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
					<div className='flex flex-row justify-around w-full'>
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
				</div>
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
