import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Dashboard from './index';
import DashboardTitle from './DashboardTitle';

import '../../../EnzymeSetup';

it('Should render one dashboard title', () => {
	const wrapper = shallow(<Dashboard />);
	expect(wrapper.find(DashboardTitle)).to.have.lengthOf(1);
});