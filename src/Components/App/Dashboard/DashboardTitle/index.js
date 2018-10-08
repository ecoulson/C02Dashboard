import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import './DashboardTitle.css';

export default class DashboardTitle extends Component {
	render() {
		return (
			<h1 className="dashboard-title">{getDashboardTitle(this.props.user)}</h1>
		)
	}
}

function getDashboardTitle(user) {
	return `${user.firstName}'s Carbon Dashboard`;
}

DashboardTitle.propTypes = {
	user: PropTypes.shape({
		firstName: PropTypes.string,
		lastName: PropTypes.string,
	})
}