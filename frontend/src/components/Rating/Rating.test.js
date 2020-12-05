import React from 'react';
import { shallow } from 'enzyme';
import Rating from './Rating.component';

describe('Rating Component', () => {
    let wrapper;
    let mockColor = 'yellow';
    let mockValue = 3.5;
    let mockText = 'Test';

    beforeEach(() => {
        const mockProps = {
            value: mockValue,
            text: mockText,
            color: mockColor,
        };

        wrapper = shallow(<Rating {...mockProps} />);
    });

    it('should render Rating component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have 0.5 full star', () => {
        const mockProps = {
            value: 0.5,
            text: mockText,
            color: mockColor,
        };
        const newWrapper = shallow(<Rating {...mockProps} />);
        expect(newWrapper.find('.fas').at(0).hasClass('fa-star-half-alt')).toBeTruthy();
    });

    it('should have 1 full star', () => {
        const mockProps = {
            value: 1,
            text: mockText,
            color: mockColor,
        };
        const newWrapper = shallow(<Rating {...mockProps} />);
        expect(newWrapper.find('.fas').at(0).hasClass('fa-star')).toBeTruthy();
    });

    it('should have 1.5 full stars', () => {
        const mockProps = {
            value: 1.5,
            text: mockText,
            color: mockColor,
        };
        const newWrapper = shallow(<Rating {...mockProps} />);
        expect(newWrapper.find('.fas').at(0).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(1).hasClass('fa-star-half-alt')).toBeTruthy();
    });

    it('should have 2 full stars', () => {
        const mockProps = {
            value: 2,
            text: mockText,
            color: mockColor,
        };
        const newWrapper = shallow(<Rating {...mockProps} />);
        expect(newWrapper.find('.fas').at(0).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(1).hasClass('fa-star')).toBeTruthy();
    });

    it('should have 2.5 full stars', () => {
        const mockProps = {
            value: 2.5,
            text: mockText,
            color: mockColor,
        };
        const newWrapper = shallow(<Rating {...mockProps} />);
        expect(newWrapper.find('.fas').at(0).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(1).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(2).hasClass('fa-star-half-alt')).toBeTruthy();
    });

    it('should have 3 full stars', () => {
        const mockProps = {
            value: 3,
            text: mockText,
            color: mockColor,
        };
        const newWrapper = shallow(<Rating {...mockProps} />);
        expect(newWrapper.find('.fas').at(0).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(1).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(2).hasClass('fa-star')).toBeTruthy();
    });

    it('should have 3.5 stars', () => {
        expect(wrapper.find('.fas').at(0).hasClass('fa-star')).toBeTruthy();
        expect(wrapper.find('.fas').at(1).hasClass('fa-star')).toBeTruthy();
        expect(wrapper.find('.fas').at(2).hasClass('fa-star')).toBeTruthy();
        expect(wrapper.find('.fas').at(3).hasClass('fa-star-half-alt')).toBeTruthy();
    });

    it('should have 4 full stars', () => {
        const mockProps = {
            value: 4,
            text: mockText,
            color: mockColor,
        };
        const newWrapper = shallow(<Rating {...mockProps} />);
        expect(newWrapper.find('.fas').at(0).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(1).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(2).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(3).hasClass('fa-star')).toBeTruthy();
    });

    it('should have 4.5 full stars', () => {
        const mockProps = {
            value: 4.5,
            text: mockText,
            color: mockColor,
        };
        const newWrapper = shallow(<Rating {...mockProps} />);
        expect(newWrapper.find('.fas').at(0).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(1).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(2).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(3).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(4).hasClass('fa-star-half-alt')).toBeTruthy();
    });

    it('should have 5 full stars', () => {
        const mockProps = {
            value: 5,
            text: mockText,
            color: mockColor,
        };
        const newWrapper = shallow(<Rating {...mockProps} />);
        expect(newWrapper.find('.fas').at(0).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(1).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(2).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(3).hasClass('fa-star')).toBeTruthy();
        expect(newWrapper.find('.fas').at(4).hasClass('fa-star')).toBeTruthy();
    });
});
