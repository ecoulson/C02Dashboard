import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import "../../../../EnzymeSetup";
import BackgroundImage from './index';

it('Should render the background', () => {
	const wrapper = shallow(<BackgroundImage/>);
	expect(wrapper.find("div")).to.have.lengthOf(1);
});