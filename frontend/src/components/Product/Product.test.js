import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product.component';

describe('Product component', () => {
    let wrapper;
    beforeEach(() => {
        const mockProduct = {
            _id: '1',
            name: 'Test Product',
            image: '/images/test.jpg',
            description:
              'Testing the Test product',
            brand: 'ProShop',
            category: 'Electronics',
            price: 99.99,
            countInStock: 10,
            rating: 4.5,
            numReviews: 12,
          }

          wrapper = shallow(<Product product={mockProduct} />)
    });
    it('should render Product component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});