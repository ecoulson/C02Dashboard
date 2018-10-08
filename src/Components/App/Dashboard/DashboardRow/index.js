import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import "./DashboardRow.css";

export default class DashboardRow extends Component {
	render() {
		return (
			<div id={this.props.name} className="dashboard-row" style={{height: this.props.height}}>
				{this.props.children}
			</div>
		)
	}
}

DashboardRow.propTypes = {
	height: PropTypes.number,
	name: PropTypes.string,
}