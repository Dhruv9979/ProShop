import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.component'

describe('Header component', () => {
    it('should render Header component', () => {
        expect(shallow(<Header />)).toMatchSnapshot();
    });
});