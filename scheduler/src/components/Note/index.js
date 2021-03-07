import React, { Component } from 'react';
import './style.css';

class Notes extends Component {
	state = {
		note: '',
		id: ''
	};

	handleInputChange = (event) => {
		let value = event.target.value;
		let noteId = event.target.id;

		this.setState({
			note: value,
			id: noteId
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();

		var noteId = this.state.id;
		var noteItem = this.state.note;

		localStorage.setItem(noteId, noteItem);
	};

	render() {
		return (
			<div className="row" key={this.props.id}>
				<div className="input-group note">
					<span className="input-group-text">{this.props.id}:00</span>
					<textarea
						className="form-control"
						value={this.state.note}
						name="note"
						id={this.props.id}
						aria-label="With textarea"
						onChange={this.handleInputChange}
					/>
					<button type="button" className="btn btn-warning" onClick={this.handleFormSubmit}>
						Save
					</button>
				</div>
			</div>
		);
	}
}

export default Notes;
