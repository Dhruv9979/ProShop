export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.product === cartItemToAdd.product
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.product === cartItemToAdd.product
                ? cartItemToAdd
                : cartItem
        );
    } else {
        return [...cartItems, { ...cartItemToAdd }];
    }
};

