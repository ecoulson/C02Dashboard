import React from 'react';
import { Component } from 'react';
import DashboardTitle from './DashboardTitle';
import "./Dashboard.css";

const dummyUser = {
	firstName: "John",
	lastName: "Smith"
};

export default class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard">
				<DashboardTitle user={dummyUser}></DashboardTitle>
			</div>
		)
	}
}