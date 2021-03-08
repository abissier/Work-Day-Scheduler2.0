import React from 'react';
import Note from './components/Note';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Hour from './components/Hour';
import time from './time.json';

function App() {
	return (
		<Wrapper>
			<Title>Work Day Scheduler</Title>
			<Hour />
			{time.map((t) => <Note id={t.id} note={t.note} />)}
		</Wrapper>
	);
}

export default App;
