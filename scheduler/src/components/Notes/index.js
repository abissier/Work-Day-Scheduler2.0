import React from 'react';
import './style.css';

function Notes(props) {
	return (
		<div className="input-group note">
			<span className="input-group-text">{props.id}</span>
			<textarea className="form-control" aria-label="With textarea" />
			{props.children}
			<button type="button" className="btn btn-warning">
				Save
			</button>
		</div>
	);
}

export default Notes;
