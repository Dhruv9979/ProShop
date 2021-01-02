import {} from './cart.actions';
import CartActions from './cart.types';

import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    cartItems: [],
};

export const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActions.CART_ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
            case CartActions.CART_REMOVE_ITEM:
                return {
                  ...state,
                  cartItems: state.cartItems.filter((x) => x.product !== action.payload),
                }
        default:
            return state;
    }
};
