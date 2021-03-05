import React, { Component } from 'react';
import Notes from './components/Notes';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import time from './time.json';

class App extends Component {
	// Setting this.state.note to the note json array
	// state = {
	// 	note
	// };

	render() {
		return (
			<Wrapper>
				<Title>Work Day Scheduler</Title>
				<div className="row">{time.map((times) => <Notes id={times.id} key={times.id} />)}</div>
			</Wrapper>
		);
	}
}

export default App;
