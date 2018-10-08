import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import "./DashboardTiles.css";

export default class DashboardTile extends Component {
	render() {
		return (
			<div className="dashboard-tile" style={{width: this.props.width}}>
				<div className="dashboard-tile-header">
					<h2 className="dashboard-tile-title">{this.props.title}</h2>
				</div>
				<div className="dashboard-tile-body">
					{this.props.children}
				</div>
			</div>
		)
	}
}

DashboardTile.propTypes = {
	title: PropTypes.string,
	width: PropTypes.number
}