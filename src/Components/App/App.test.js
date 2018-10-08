import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import '../../EnzymeSetup';
import App from './index';
import Dashboard from './Dashboard';

it('Should render the dashboard', () => {
	const wrapper = shallow(<App/>);
	expect(wrapper.find(Dashboard)).to.have.lengthOf(1);
});