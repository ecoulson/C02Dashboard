import React from 'react';
import { Component } from 'react';
import DashboardTitle from './DashboardTitle';
import "./Dashboard.css";
import DashboardRow from './DashboardRow';
import DashboardTile from './DashboardTile';
import EmissionTile from './Tiles/CarRow/EmissionTile';

const dummyUser = {
	firstName: "John",
	lastName: "Smith"
};

export default class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard">
				<DashboardTitle user={dummyUser}></DashboardTitle>
				<DashboardRow name="car" height={400}>
					<EmissionTile></EmissionTile>
				</DashboardRow>	
			</div>
		)
	}
}