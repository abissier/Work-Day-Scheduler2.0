import React from 'react';
import './style.css';

function Hour() {
	return <div className="hour">{new Date().toUTCString()}</div>;
}

export default Hour;
