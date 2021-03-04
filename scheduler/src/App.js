import React, { Component } from 'react';
import Notes from './components/Notes';
import Wrapper from './components/Wrapper';
import Title from './components/Title';

class App extends Component {
	// Map over this.state.friends and render a FriendCard component for each friend object
	render() {
		return (
			<Wrapper>
				<Title>Title</Title>
				<Notes>Notes</Notes>
			</Wrapper>
		);
	}
}

export default App;
