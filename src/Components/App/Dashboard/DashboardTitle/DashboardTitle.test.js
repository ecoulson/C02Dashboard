import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import '../../../../EnzymeSetup';
import DashboardTitle from './index';

const dummyUser = {
	firstName: "John",
	lastName: "Smith"
};

it('Should render the title', () => {
	const wrapper = shallow(<DashboardTitle user={dummyUser}/>);
	expect(wrapper.find("h1")).to.have.lengthOf(1);
});
//this is current

it('Should render correct title name', () => {
	const wrapper = shallow(<DashboardTitle user={dummyUser}/>);
	expect(wrapper.text()).to.equal("John's' Carbon Dashboard");
});