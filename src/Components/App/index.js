import React, { Component } from 'react';
import './App.css';
import './Dashboard';
import Dashboard from './Dashboard';
import Background from './Background';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Dashboard></Dashboard>
				<Background></Background>
			</div>
		);
	}
}

export default App;
