import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DashboardTile from './index';

import '../../../../EnzymeSetup';

it('Should render one dashboard tile', () => {
	const wrapper = shallow(
		<DashboardTile></DashboardTile>
	);
	expect(wrapper.find("h2")).to.have.lengthOf(1);
});