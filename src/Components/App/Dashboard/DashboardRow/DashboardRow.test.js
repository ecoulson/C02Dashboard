import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DashboardRow from './index';

import '../../../../EnzymeSetup';

it('Should render one dashboard row with three h3s', () => {
	const wrapper = shallow(
		<DashboardRow>
			<h3>A</h3>
			<h3>B</h3>
			<h3>C</h3>
		</DashboardRow>
	);
	expect(wrapper.find("h3")).to.have.lengthOf(3);
});