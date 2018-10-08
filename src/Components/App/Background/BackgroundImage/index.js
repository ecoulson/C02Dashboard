import React from 'react';
import { Component } from 'react';
import mountains from './mountains-bg.jpg';
import './BackgroundImage.css';


export default class BackgroundImage extends Component {
	render() {
		return (
			<div className="app-background-image" style={this.getBackgroundImage()}></div>
		)
	}

	getBackgroundImage() {
		return { 
			backgroundImage: mountains 
		};
	}
}