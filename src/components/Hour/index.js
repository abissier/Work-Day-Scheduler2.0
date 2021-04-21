import React, { useState, useEffect } from 'react';
import './style.css';

function Hour() {
	const [ time, setTime ] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div>
			<div className="hour">
				{time.toLocaleDateString()},{time.toLocaleTimeString()}{' '}
			</div>
		</div>
	);
}

export default Hour;
