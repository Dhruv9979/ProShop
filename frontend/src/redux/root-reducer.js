import { combineReducers } from 'redux';
import {
    productListReducer,
    productDetailsReducer,
} from './product/product.reducer';
import { CartReducer } from './cart/cart.reducer';

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: CartReducer,
});

export default rootReducer;
