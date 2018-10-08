import React from 'react';
import { Component } from 'react';
import BackgroundImage from './BackgroundImage';
import './Background.css';

export default class Background extends Component {
	render() {
		return (
			<div style={{zIndex: -1, position: "fixed"}}>
				<div className="app-background">
					<BackgroundImage></BackgroundImage>
				</div>
			</div>
		)
	}
}