import React, { Component } from 'react';
import './style.css';

class Notes extends Component {
	state = {
		note: '',
		id: '',
		hour: new Date().getHours(),
		appClass: ''
	};

	// display saved notes from local storage
	componentDidMount() {
		for (var i = 8; i < 17; i++) {
			var displayTodo = localStorage.getItem(i);
			if (displayTodo && this.props.id === i) {
				this.setState({
					note: displayTodo,
					id: i
				});
			}
			if (this.state.hour < this.props.id) {
				this.setState({
					appClass: 'input-group-text later'
				});
			} else if (this.state.hour > this.props.id) {
				this.setState({
					appClass: 'input-group-text before'
				});
			} else {
				this.setState({
					appClass: 'input-group-text current'
				});
			}
		}
	}

	// update note state when value changes
	handleInputChange = (event) => {
		let value = event.target.value;
		let noteId = event.target.id;

		this.setState({
			note: value,
			id: noteId
		});
	};

	// save note to local storage when save button clicked
	handleFormSubmit = (event) => {
		event.preventDefault();

		var noteId = this.state.id;
		var noteItem = this.state.note;

		localStorage.setItem(noteId, noteItem);
	};

	// return note card for each hour
	render() {
		return (
			<div className="row" key={this.props.time}>
				<div className="input-group note">
					<span className={this.state.appClass}>{this.props.id}:00</span>
					<textarea
						className="form-control"
						value={this.state.note}
						id={this.props.id}
						aria-label="With textarea"
						onChange={this.handleInputChange}
					/>
					<button type="button" className="btn btn-warning" onClick={this.handleFormSubmit}>
						save
					</button>
				</div>
			</div>
		);
	}
}

export default Notes;
