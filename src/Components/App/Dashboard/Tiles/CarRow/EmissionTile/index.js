import React from 'react';
import { Component } from 'react';
import DashboardTile from '../../../DashboardTile';
import "./EmissionTile.css";

export default class EmissionTile extends Component {
	render() {
		return (
			<DashboardTile width={400} title="Daily C02 Emission From Car">
				<h1>102k</h1>  {/*refactor too emission calculator*/}
				<h4 className="emission-label">Tons Of Carbon</h4>
			</DashboardTile>
		)
	}
}