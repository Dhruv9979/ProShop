import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer.component'

describe('Footer component', () => {
    it('should render Footer component', () => {
        expect(shallow(<Footer />)).toMatchSnapshot();
    });
});