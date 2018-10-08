import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import "../../../EnzymeSetup";
import Background from './index';
import BackgroundImage from './BackgroundImage';

it('Should render the background image', () => {
	const wrapper = shallow(<Background/>);
	expect(wrapper.find(BackgroundImage)).to.have.lengthOf(1);
});