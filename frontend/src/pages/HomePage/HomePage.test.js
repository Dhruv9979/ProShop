import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage.component';

describe('HomePage component', () => {
    let wrapper;
    beforeEach(() => {
        const mockProducts = [
            {
                _id: '1',
                name: 'Test-1',
                image: '/images/test1.jpg',
                description: 'Testing this product',
                brand: 'ProShop',
                category: 'Electronics',
                price: 89.99,
                countInStock: 10,
                rating: 0.5,
                numReviews: 2,
            },
            {
                _id: '2',
                name: 'Test-2',
                image: '/images/test2.jpg',
                description: 'Testing this product',
                brand: 'Apple',
                category: 'Electronics',
                price: 599.99,
                countInStock: 7,
                rating: 1.0,
                numReviews: 4,
            },
            {
                _id: '3',
                name: 'Test-3',
                image: '/images/test3.jpg',
                description: 'Testing this product',
                brand: 'ProShop',
                price: 929.99,
                countInStock: 5,
                rating: 2.5,
                numReviews: 8,
            },
            {
                _id: '4',
                name: 'Test-4',
                image: '/images/test4.jpg',
                description: 'Testing this product',
                brand: 'ProShop',
                category: 'Electronics',
                price: 399.99,
                countInStock: 11,
                rating: 3,
                numReviews: 16,
            },
            {
                _id: '5',
                name: 'Test-5',
                image: '/images/test5.jpg',
                description: 'Testing this product',
                brand: 'ProShop',
                category: 'Electronics',
                price: 49.99,
                countInStock: 7,
                rating: 4.5,
                numReviews: 32,
            },
            {
                _id: '6',
                name: 'Test-6',
                image: '/images/test6.jpg',
                description: 'Testing this product',
                brand: 'ProShop',
                category: 'Electronics',
                price: 29.99,
                countInStock: 0,
                rating: 5,
                numReviews: 64,
            },
        ];

        wrapper = shallow(<HomePage products={mockProducts} />);
    });

    it('should render HomePage', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
